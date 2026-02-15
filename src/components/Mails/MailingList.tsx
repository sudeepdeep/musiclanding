import React, { useState } from "react";

function MailingList() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {

      const apiKey = await fetch('https://www.djomusic.com/api/form/FormSubmissionKey', {method: 'POST', headers: {'Content-Type': 'application/json'}}).then(res => res.json())
      console.log(apiKey)

//       {
//     "key": "1:1770486943:FAXqgfdoG1LLOHUOlbtswbU35XRYAZ2VAPFIzhSDOXE=",
//     "formId": "67883bee73750e6c76212474",
//     "collectionId": "67883bee73750e6c76212476",
//     "objectName": "23a32ffb55fcb291a622",
//     "form": "{\"email-yui_3_17_2_1_1658358129065_1984\":\"test12@gmail.com\"}",
//     "captchaKey": null,
//     "recaptchaEnterpriseV3Token": "0cAFcWeA7uVxOiTQAMktnSOkawpOblo-c0fsyZpROmvdPQCPM-vA--Uxq2R7-Zr5nuIhi_YPJ980xgZnW1vZTBUke3Y2oasWXZCBny8XYTGpysd3ZR2WmcWci5A2fc7sj1xxymw3qfGKAULJrlEr_ul5U_VyEnyByGdkCi99ZeS8bwwx_SZsYoiF57UDKvRxc2S68NKuI669CRGP1HsaJF76_KojQyhbiZWDgqepqFWmMbU1x4IULBgjprU42iNT2_VJa6m74ZSLJecjBilEd-xIvicSucZCoRSY8h_9ygKGBsT-8LKF68Y_H6oCjMNr7d6ci5tKX9wepYJCrvlytFeIrtJyPaA2h8T4um9SJ80tKKQYXOkEmsooX6uMOKlPpUSU3MB1xIGS91ptwersBno8Id7kTHFni-2QfdwVkJQrX_K-MudMbHMTTQ_Jz5vQHVjyM8HGKEMy3gw2fsUMvqK91YrWbVwr0CmsDpL5zKxjFSYQIMdHUEUogDtOqrR27WontVZE1dPCIzxtGa99pekkH6lPuucsTbo7LPqfSf9VvYcrIIwqhVe8ZC6Exb4h-n_gaRqkuUZqAp-i1N94TMIHGMDBLk7HywdoOXDvv38S-90_mbLft6I4Eb4eMlNUYl0bkoafIirPNjqVff2lT-9TQULZ4QF8NseDTFNERgqH_jXK89-leuGrPtuZOOQOQ3bYXTNMqPeIwHShl8ZnDlAvotHyqp9oNQGR7Qg0V9B1dEx14u-Y6yY_38qZdt_4TcUge3JB-Ty175-JcU8__e5T5G38U0lpnmcwXpU7X2HyPk58m4R3IPx6CtXoV75CXTi5hYkC7YPCp-SEr_-iEkIX2mM0qZQ433RoCaXrigMFZ390cOKlDL2NI3ZckMn8FyjCaXsxOw8aENKgJPNgKIVH5Rn6qoBoYPYDgnuiCjJ4sm_FMObjMyhnTzRK91m6ig7zgbUM8aV7pSXO3955XYkUCMumoLIYepal530gk3KA7pESYnzSFf3HD7GFg6lLjHMB5ykonAEStfU9O27axl_rOJFoEfFREtftdS0yQqviIY6aMqZLOjyj4q1CkQ5dHPK_85IXLz6sbXfJr8iuKWKd3jayfTY3IBWxM-Qrs9HrRmHVwp7BsvukNwfQLGfbQyB8w1XAzY8wjog3BaYq4VnjFwPOugKfDqUiWNbGmH4GiBKqgfKVa8typXr11HTajJ-bBBj930nJqzvQQVIS6_5OIA6pMQEefVZddBkp8B2sWq5kGxJtVR5L_49nyoaFOs2JryR1WeL3AOysElmBTF8zqQow-IB1uDYROoGv7kS0p3JeuF7EPLhOJVMiFCGAPZvdPgnFiAvoW19G9ZFPoNPgWDEayoi6rsjUHkwi6WodqrcDiQ5Lc_2TjSqa3kEE5WGY4NU43OVJvWYoruo48-av1DGk1HXxpcQCEBN3OVNGEKPSOnnXIy1fAX-5ToK6UoluD-T_ZxnnmPobuosPfZqloO6kjcxKjrTTdNJRMSPPbPssMIoMKhSgs8dvGC-C7MauHSjhbet0SrvD8BCKiuiM_eZFxdX75tunVyimUQEFdZcUMRoD-9s9Ia3VJ1BfYXq0lnryS58UCIqdHzKHvXQmpE4GpAyEdYf2MSIqTtYSoUY2ZFujJdSkg9dvu7W1CFGxAZnPiJz_45erR5WnE9uC3sGHrpqDlvIjOXpY5tW7cFFnTF6IUR9Mt84RrKm_pFjCNrpmy1R7LNM49toPpw1_fZMdugZ52hUcRx3xXA9CiroJL38Q-eF2iP-Df54YpZw1aSRhZjRaHnU5P_1HFHrFkxM4jhNlm-shmW4V94Zn3_rEPZ1ov_D21bNRrRUwqIFSgjVZcJyFFGyULfZNwSPWNaQyq8aWnRT3HS3rcqxHs8BYcHMBj1CMniUw4JZLo1l_dh7t9Z8BpZ-BLg0O9r7iQ8mvjJjhwyG8aH_IwifAPo7Zj0T7jmv337i3rL0cFk-mnBmGiZ3azU2PTDOZUTMU0Nw0XJP5pr9HNa1rD43MS6LybiJ8exvjy3KWABgrFuhOXIFjQDAdkMbFSIgklJU8sKNeBahyRZiK5_Vh_n8YDQITPXK_iUw19cvNvhMFAoQBIqPNAf1Nz_SkJVkGVIkm2hjg3mW6b1AByJKle2plDu_jMC98WnmNeWmV4V4GWdyM6PuhXpx5qs",
//     "pagePermissionTypeValue": 1,
//     "pageTitle": "Mailing List",
//     "pageId": "67883bee73750e6c76212476",
//     "contentSource": "c",
//     "pagePath": "/mailing-list"
// }
      // Option 1: If you can access the Squarespace form directly
      const response = await fetch('https://api.squarespace.com/1.0/commerce/email-campaigns/email-lists', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key: apiKey.key,
          formId: "67883bee73750e6c76212474",
          collectionId: "67883bee73750e6c76212476",
          objectName: "23a32ffb55fcb291a622",
          form: `{\"email-yui_3_17_2_1_1658358129065_1984\":\"${email}\"}`,
          captchaKey: null,
          recaptchaEnterpriseV3Token: "0cAFcWeA7uVxOiTQAMktnSOkawpOblo-c0fsyZpROmvdPQCPM-vA--Uxq2R7-Zr5nuIhi_YPJ980xgZnW1vZTBUke3Y2oasWXZCBny8XYTGpysd3ZR2WmcWci5A2fc7sj1xxymw3qfGKAULJrlEr_ul5U_VyEnyByGdkCi99ZeS8bwwx_SZsYoiF57UDKvRxc2S68NKuI669CRGP1HsaJF76_KojQyhbiZWDgqepqFWmMbU1x4IULBgjprU42iNT2_VJa6m74ZSLJecjBilEd-xIvicSucZCoRSY8h_9ygKGBsT-8LKF68Y_H6oCjMNr7d6ci5tKX9wepYJCrvlytFeIrtJyPaA2h8T4um9SJ80tKKQYXOkEmsooX6uMOKlPpUSU3MB1xIGS91ptwersBno8Id7kTHFni-2QfdwVkJQrX_K-MudMbHMTTQ_Jz5vQHVjyM8HGKEMy3gw2fsUMvqK91YrWbVwr0CmsDpL5zKxjFSYQIMdHUEUogDtOqrR27WontVZE1dPCIzxtGa99pekkH6lPuucsTbo7LPqfSf9VvYcrIIwqhVe8ZC6Exb4h-n_gaRqkuUZqAp-i1N94TMIHGMDBLk7HywdoOXDvv38S-90_mbLft6I4Eb4eMlNUYl0bkoafIirPNjqVff2lT-9TQULZ4QF8NseDTFNERgqH_jXK89-leuGrPtuZOOQOQ3bYXTNMqPeIwHShl8ZnDlAvotHyqp9oNQGR7Qg0V9B1dEx14u-Y6yY_38qZdt_4TcUge3JB-Ty175-JcU8__e5T5G38U0lpnmcwXpU7X2HyPk58m4R3IPx6CtXoV75CXTi5hYkC7YPCp-SEr_-iEkIX2mM0qZQ433RoCaXrigMFZ390cOKlDL2NI3ZckMn8FyjCaXsxOw8aENKgJPNgKIVH5Rn6qoBoYPYDgnuiCjJ4sm_FMObjMyhnTzRK91m6ig7zgbUM8aV7pSXO3955XYkUCMumoLIYepal530gk3KA7pESYnzSFf3HD7GFg6lLjHMB5ykonAEStfU9O27axl_rOJFoEfFREtftdS0yQqviIY6aMqZLOjyj4q1CkQ5dHPK_85IXLz6sbXfJr8iuKWKd3jayfTY3IBWxM-Qrs9HrRmHVwp7BsvukNwfQLGfbQyB8w1XAzY8wjog3BaYq4VnjFwPOugKfDqUiWNbGmH4GiBKqgfKVa8typXr11HTajJ-bBBj930nJqzvQQVIS6_5OIA6pMQEefVZddBkp8B2sWq5kGxJtVR5L_49nyoaFOs2JryR1WeL3AOysElmBTF8zqQow-IB1uDYROoGv7kS0p3JeuF7EPLhOJVMiFCGAPZvdPgnFiAvoW19G9ZFPoNPgWDEayoi6rsjUHkwi6WodqrcDiQ5Lc_2TjSqa3kEE5WGY4NU43OVJvWYoruo48-av1DGk1HXxpcQCEBN3OVNGEKPSOnnXIy1fAX-5ToK6UoluD-T_ZxnnmPobuosPfZqloO6kjcxKjrTTdNJRMSPPbPssMIoMKhSgs8dvGC-C7MauHSjhbet0SrvD8BCKiuiM_eZFxdX75tunVyimUQEFdZcUMRoD-9s9Ia3VJ1BfYXq0lnryS58UCIqdHzKHvXQmpE4GpAyEdYf2MSIqTtYSoUY2ZFujJdSkg9dvu7W1CFGxAZnPiJz_45erR5WnE9uC3sGHrpqDlvIjOXpY5tW7cFFnTF6IUR9Mt84RrKm_pFjCNrpmy1R7LNM49toPpw1_fZMdugZ52hUcRx3xXA9CiroJL38Q-eF2iP-Df54YpZw1aSRhZjRaHnU5P_1HFHrFkxM4jhNlm-shmW4V94Zn3_rEPZ1ov_D21bNRrRUwqIFSgjVZcJyFFGyULfZNwSPWNaQyq8aWnRT3HS3rcqxHs8BYcHMBj1CMniUw4JZLo1l_dh7t9Z8BpZ-BLg0O9r7iQ8mvjJjhwyG8aH_IwifAPo7Zj0T7jmv337i3rL0cFk-mnBmGiZ3azU2PTDOZUTMU0Nw0XJP5pr9HNa1rD43MS6LybiJ8exvjy3KWABgrFuhOXIFjQDAdkMbFSIgklJU8sKNeBahyRZiK5_Vh_n8YDQITPXK_iUw19cvNvhMFAoQBIqPNAf1Nz_SkJVkGVIkm2hjg3mW6b1AByJKle2plDu_jMC98WnmNeWmV4V4GWdyM6PuhXpx5qs",
          pagePermissionTypeValue: 1,
          pageTitle: "Mailing List",
          pageId: "67883bee73750e6c76212476",
          contentSource: "c",
          pagePath: "/mailing-list",
        }),
      });
console.log(response)
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
        }, 5000);
      } else {
        throw new Error('Subscription failed');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again.');
      console.error('Subscription error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="mail"
      className="relative bg-black py-20 px-8 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-40"
          style={{
            background: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-8xl font-black text-white mb-6">
          MAILING {" "}
          <span
            className="text-transparent"
            style={
              {
                WebkitTextStroke: "3px white",
              } as React.CSSProperties
            }
          >
            LIST
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
          Be the first to know about new releases, exclusive content, and tour
          announcements
        </p>

        <div className="bg-white/5 p-8 md:p-12 border border-white/10 max-w-2xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  disabled={isLoading}
                  autoComplete="email"
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-gray-400 text-lg focus:outline-none focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 border-2 border-white text-white font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-black backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Signing Up...</span>
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Thank you!
              </h3>
              <p className="text-gray-300">
                You'll receive updates about DJO's latest music and tours.
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MailingList;
