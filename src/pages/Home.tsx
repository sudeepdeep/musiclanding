import { useEffect, useState } from "react";
import BannerOne from "../components/BannerOne";
import Footer from "../components/Footer";
import "../components/Home.css";
import MailingList from "../components/Mails/MailingList";
import Merchandise from "../components/Merchandise";
import News from "../components/News";
import NoiseOverlay from "../components/Noise";
import SpotifyFixedPlayer from "../components/SpotifyFixedPlayer";
import Tour from "../components/Tour";
import YouTubeSection from "../components/YouTubeSection";
import { CrossIcon, XIcon } from "lucide-react";
import BannerThree from "../components/BannerThree";
import { motion, useScroll, useTransform } from "framer-motion";

function Home() {
  const [showBanner, setShowBanner] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setError("");

    try {
      const apiKey = await fetch(
        "https://www.djomusic.com/api/form/FormSubmissionKey",
        { method: "POST", headers: { "Content-Type": "application/json" } },
      ).then((res) => res.json());
      console.log(apiKey);

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
      const response = await fetch(
        "https://api.squarespace.com/1.0/commerce/email-campaigns/email-lists",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            key: apiKey.key,
            formId: "67883bee73750e6c76212474",
            collectionId: "67883bee73750e6c76212476",
            objectName: "23a32ffb55fcb291a622",
            form: `{\"email-yui_3_17_2_1_1658358129065_1984\":\"${email}\"}`,
            captchaKey: null,
            recaptchaEnterpriseV3Token:
              "0cAFcWeA7uVxOiTQAMktnSOkawpOblo-c0fsyZpROmvdPQCPM-vA--Uxq2R7-Zr5nuIhi_YPJ980xgZnW1vZTBUke3Y2oasWXZCBny8XYTGpysd3ZR2WmcWci5A2fc7sj1xxymw3qfGKAULJrlEr_ul5U_VyEnyByGdkCi99ZeS8bwwx_SZsYoiF57UDKvRxc2S68NKuI669CRGP1HsaJF76_KojQyhbiZWDgqepqFWmMbU1x4IULBgjprU42iNT2_VJa6m74ZSLJecjBilEd-xIvicSucZCoRSY8h_9ygKGBsT-8LKF68Y_H6oCjMNr7d6ci5tKX9wepYJCrvlytFeIrtJyPaA2h8T4um9SJ80tKKQYXOkEmsooX6uMOKlPpUSU3MB1xIGS91ptwersBno8Id7kTHFni-2QfdwVkJQrX_K-MudMbHMTTQ_Jz5vQHVjyM8HGKEMy3gw2fsUMvqK91YrWbVwr0CmsDpL5zKxjFSYQIMdHUEUogDtOqrR27WontVZE1dPCIzxtGa99pekkH6lPuucsTbo7LPqfSf9VvYcrIIwqhVe8ZC6Exb4h-n_gaRqkuUZqAp-i1N94TMIHGMDBLk7HywdoOXDvv38S-90_mbLft6I4Eb4eMlNUYl0bkoafIirPNjqVff2lT-9TQULZ4QF8NseDTFNERgqH_jXK89-leuGrPtuZOOQOQ3bYXTNMqPeIwHShl8ZnDlAvotHyqp9oNQGR7Qg0V9B1dEx14u-Y6yY_38qZdt_4TcUge3JB-Ty175-JcU8__e5T5G38U0lpnmcwXpU7X2HyPk58m4R3IPx6CtXoV75CXTi5hYkC7YPCp-SEr_-iEkIX2mM0qZQ433RoCaXrigMFZ390cOKlDL2NI3ZckMn8FyjCaXsxOw8aENKgJPNgKIVH5Rn6qoBoYPYDgnuiCjJ4sm_FMObjMyhnTzRK91m6ig7zgbUM8aV7pSXO3955XYkUCMumoLIYepal530gk3KA7pESYnzSFf3HD7GFg6lLjHMB5ykonAEStfU9O27axl_rOJFoEfFREtftdS0yQqviIY6aMqZLOjyj4q1CkQ5dHPK_85IXLz6sbXfJr8iuKWKd3jayfTY3IBWxM-Qrs9HrRmHVwp7BsvukNwfQLGfbQyB8w1XAzY8wjog3BaYq4VnjFwPOugKfDqUiWNbGmH4GiBKqgfKVa8typXr11HTajJ-bBBj930nJqzvQQVIS6_5OIA6pMQEefVZddBkp8B2sWq5kGxJtVR5L_49nyoaFOs2JryR1WeL3AOysElmBTF8zqQow-IB1uDYROoGv7kS0p3JeuF7EPLhOJVMiFCGAPZvdPgnFiAvoW19G9ZFPoNPgWDEayoi6rsjUHkwi6WodqrcDiQ5Lc_2TjSqa3kEE5WGY4NU43OVJvWYoruo48-av1DGk1HXxpcQCEBN3OVNGEKPSOnnXIy1fAX-5ToK6UoluD-T_ZxnnmPobuosPfZqloO6kjcxKjrTTdNJRMSPPbPssMIoMKhSgs8dvGC-C7MauHSjhbet0SrvD8BCKiuiM_eZFxdX75tunVyimUQEFdZcUMRoD-9s9Ia3VJ1BfYXq0lnryS58UCIqdHzKHvXQmpE4GpAyEdYf2MSIqTtYSoUY2ZFujJdSkg9dvu7W1CFGxAZnPiJz_45erR5WnE9uC3sGHrpqDlvIjOXpY5tW7cFFnTF6IUR9Mt84RrKm_pFjCNrpmy1R7LNM49toPpw1_fZMdugZ52hUcRx3xXA9CiroJL38Q-eF2iP-Df54YpZw1aSRhZjRaHnU5P_1HFHrFkxM4jhNlm-shmW4V94Zn3_rEPZ1ov_D21bNRrRUwqIFSgjVZcJyFFGyULfZNwSPWNaQyq8aWnRT3HS3rcqxHs8BYcHMBj1CMniUw4JZLo1l_dh7t9Z8BpZ-BLg0O9r7iQ8mvjJjhwyG8aH_IwifAPo7Zj0T7jmv337i3rL0cFk-mnBmGiZ3azU2PTDOZUTMU0Nw0XJP5pr9HNa1rD43MS6LybiJ8exvjy3KWABgrFuhOXIFjQDAdkMbFSIgklJU8sKNeBahyRZiK5_Vh_n8YDQITPXK_iUw19cvNvhMFAoQBIqPNAf1Nz_SkJVkGVIkm2hjg3mW6b1AByJKle2plDu_jMC98WnmNeWmV4V4GWdyM6PuhXpx5qs",
            pagePermissionTypeValue: 1,
            pageTitle: "Mailing List",
            pageId: "67883bee73750e6c76212476",
            contentSource: "c",
            pagePath: "/mailing-list",
          }),
        },
      );
      console.log(response);
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setEmail("");
        }, 5000);
      } else {
        throw new Error("Subscription failed");
      }
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
      console.error("Subscription error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-wrapper">
      <NoiseOverlay />

      <motion.div className="absolute hidden md:block right-0 top-[5%] md:blur-md blur-sm z-[20] opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-audio-waveform-icon lucide-audio-waveform w-[10rem] h-[10rem] md:w-[40rem] md:h-[40rem]"
        >
          <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" />
        </svg>
      </motion.div>
      {/* <BannerOne /> */}
      <BannerThree />
      {/* add background blur */}
      {showBanner && (
        <>
          <div className="absolute z-10 top-0 w-[100vw] h-[100vh] bg-black/55"></div>
          <div className="fixed h-auto md:w-[50vw] w-[90%] mx-auto mt-[5%] pb-[5%] md:top-4 top-16 left-4 right-4 bg-black border border-white/50 text-white p-4 text-center z-50 liquid-glass2">
            <XIcon
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setShowBanner(false)}
            />
            <p className="mt-[60px] text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed mb-5">
              Be the first to know about new releases, exclusive content, and
              tour announcements
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
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white text-lg focus:outline-none focus:border-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  {error && <div className="text-red-400 text-sm">{error}</div>}

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
        </>
      )}

      {/* <motion.div
  className="absolute left-0 md:top-[18%] top-[10%] blur-sm z-[10] opacity-50 rotate-[-15deg]"
  
>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-music2-icon lucide-music-2 w-[5rem] h-[5rem] md:w-[15rem] md:h-[15rem]"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
 
</motion.div>


     <motion.div
  className="absolute right-10 md:top-[32%] top-[24.9%] blur-sm z-[10] opacity-50 rotate-[15deg]"
  
><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-earth-icon lucide-earth w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>
</motion.div> */}

      {/* <motion.div
  className="absolute right-10 md:top-[20%] top-[21.5%] blur-sm z-[10] opacity-50 rotate-[15deg]"
  
>

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-headphones-icon lucide-headphones w-[8rem] h-[8rem] md:w-[15rem] md:h-[15rem]"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>

 
</motion.div> */}

      {/* <motion.div
  className="absolute right-10 md:top-[42%] top-[51.5%] blur-sm z-[10] opacity-50 rotate-[15deg]"
  
>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shirt-icon lucide-shirt w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>
 
</motion.div>



     <motion.div
  className="absolute right-10 md:top-[20%] top-[21.5%] blur-sm z-[10] opacity-50 rotate-[15deg]"
  
>

  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-headphones-icon lucide-headphones w-[5rem] h-[5rem] md:w-[15rem] md:h-[15rem]"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>


 
</motion.div>

     <motion.div
  className="absolute left-10 md:top-[60%] top-[64%] blur-sm z-[10] opacity-50 -rotate-[15deg]"
  
><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube-icon lucide-youtube w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
 
</motion.div>

     <motion.div
  className="absolute right-20 md:top-[80%] top-[84%] blur-sm z-[10] opacity-50"
  
><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send-icon lucide-send w-[5rem] h-[5rem] md:w-[10rem] md:h-[10rem]"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
</motion.div> */}
      <News />
      <Tour />
      <Merchandise />
      <YouTubeSection />
      <MailingList />
      <Footer />
      <SpotifyFixedPlayer />
    </div>
  );
}

export default Home;
