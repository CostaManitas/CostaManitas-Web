
"use client";

import { useEffect, useState } from "react";

const GA_ID = "G-LR9PPJ1DSK";
const STORAGE_KEY = "costa-manitas-cookie-consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const consent = JSON.parse(saved);
        setAnalytics(consent.analytics === true);
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }

    setInitialized(true);

    const openSettings = () => {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        try {
          setAnalytics(JSON.parse(saved).analytics === true);
        } catch {
          setAnalytics(false);
        }
      } else {
        setAnalytics(false);
      }

      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener("open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener("open-cookie-settings", openSettings);
    };
  }, []);

  useEffect(() => {
    if (!initialized) return;

    if (analytics) {
      window["ga-disable-" + GA_ID] = false;

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };

      window.gtag("consent", "default", {
        analytics_storage: "denied",
      });

      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });

      if (!document.getElementById("google-analytics-script")) {
        window.gtag("js", new Date());
        window.gtag("config", GA_ID);

        const script = document.createElement("script");
        script.id = "google-analytics-script";
        script.async = true;
        script.src =
          "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;

        document.head.appendChild(script);
      } else {
        window.gtag("config", GA_ID, {
          send_page_view: false,
        });
      }
    } else {
      window["ga-disable-" + GA_ID] = true;

      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }

      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0].trim();

        if (name === "_ga" || name.startsWith("_ga_")) {
          document.cookie =
            name +
            "=; Max-Age=0; path=/; domain=" +
            window.location.hostname;
          document.cookie = name + "=; Max-Age=0; path=/";
        }
      });
    }
  }, [analytics, initialized]);

  function saveConsent(accepted) {
    const consent = {
      analytics: accepted,
      date: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));

    setAnalytics(accepted);
    setShowBanner(false);
    setShowSettings(false);
  }

  if (!initialized || !showBanner) return null;

  
  return (
    <div className="fixed bottom-0 left-0 z-[100] w-full border-t border-gray-300 bg-white">
      <div className="mx-auto flex max-w-6xl flex-row items-center justify-between gap-2 px-2 py-2">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] leading-tight text-gray-700">
            Usamos cookies analíticas con tu consentimiento.{" "}
            <a href="/politica-de-cookies/" className="underline">
              Más información
            </a>.
          </p>

          {showSettings && (
            <div className="mt-2 flex flex-col gap-2 border-t border-gray-200 pt-2">
              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input type="checkbox" checked disabled />
                Cookies técnicas necesarias (siempre activas)
              </label>

              <label className="flex items-center gap-2 text-xs text-gray-700">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                Cookies analíticas (Google Analytics)
              </label>
            </div>
          )}
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => saveConsent(true)}
            className="bg-black px-3 py-2 text-xs font-semibold text-white"
          >
            Aceptar
          </button>

          <button
            onClick={() => saveConsent(false)}
            className="border border-gray-400 px-3 py-2 text-xs font-semibold"
          >
            Rechazar
          </button>

          <button
            onClick={() => {
              if (showSettings) {
                saveConsent(analytics);
              } else {
                setShowSettings(true);
              }
            }}
            className="border border-gray-400 px-3 py-2 text-xs"
          >
            {showSettings ? "Guardar" : "Configurar"}
          </button>
        </div>
      </div>
    </div>
  );
}