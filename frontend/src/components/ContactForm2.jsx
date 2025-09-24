import React, { useEffect, useRef, useState } from 'react';
import navData from '../data/navData';

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mldpenon';
const RECAPTCHA_SITE_KEY = '6Lft6NIrAAAAAFPMnx0-n8SVTDI4rkMTsNUV0XZ6';

function normaliseContext(label) {
  if (!label) return 'our solutions';
  const trimmed = String(label).trim();
  if (!trimmed) return 'our solutions';
  return trimmed;
}

const ContactForm2 = ({ contextLabel }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [status, setStatus] = useState(null);
  const recaptchaRef = useRef(null);
  const context = normaliseContext(contextLabel);
  const phoneLabel = navData?.topbar?.phone?.label ?? '+91 98 7654 3210';
  const phoneRaw = navData?.topbar?.phone?.raw ?? '+919876543210';
  const emailLabel = navData?.topbar?.email?.label ?? 'hello@vertilinks.com';
  const emailRaw = navData?.topbar?.email?.raw ?? 'hello@vertilinks.com';

  const handleCaptchaChange = (value) => {
    if (value) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  useEffect(() => {
    window.handleCaptchaChange = handleCaptchaChange;

    const existing = document.getElementById('google-recaptcha-script');
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'google-recaptcha-script';
      script.src = 'https://www.google.com/recaptcha/api.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      recaptchaRef.current = script;
    }

    return () => {
      if (recaptchaRef.current) {
        document.body.removeChild(recaptchaRef.current);
        recaptchaRef.current = null;
      }
      delete window.handleCaptchaChange;
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isVerified) {
      setStatus({ type: 'error', message: 'Please complete the verification.' });
      return;
    }

    const formEl = event.target;
    const formData = new FormData(formEl);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Form submitted successfully!' });
        formEl.reset();
        setIsVerified(false);
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
        setTimeout(() => setStatus(null), 2000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-indigo-500/40 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 right-[-10%] h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 text-white md:flex-row md:px-8">
        <div className="max-w-lg space-y-5">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-200">
            Need assistance?
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Looking for {context}?
          </h2>
          <p className="text-sm leading-6 text-slate-200 md:text-base">
            Share a few details and our specialists will help you scope deployment, pricing, and support tailored for your next rollout.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur">
            Prefer a quick chat? Call us at <a href={`tel:${phoneRaw}`} className="font-semibold text-sky-200 underline-offset-4 hover:underline">{phoneLabel}</a> or drop an email at <a href={`mailto:${emailRaw}`} className="font-semibold text-sky-200 underline-offset-4 hover:underline">{emailLabel}</a>.
          </div>
        </div>

        <form
          className="w-full max-w-xl space-y-6 rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur md:ml-auto"
          onSubmit={handleSubmit}
        >
          {status ? (
            <div
              className={`rounded-lg px-4 py-3 text-sm font-medium ${
                status.type === 'success'
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'bg-rose-50 text-rose-700'
              }`}
            >
              {status.message}
            </div>
          ) : null}

          <input type="hidden" name="formName" value="VertiLinks Catalog CTA" />
          <input type="hidden" name="_subject" value={`New enquiry - ${context}`} />

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900">
              Company*
              <input
                type="text"
                name="company"
                required
                className="rounded-xl border border-slate-300 px-4 py-2 text-base text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900">
              Name*
              <input
                type="text"
                name="name"
                required
                className="rounded-xl border border-slate-300 px-4 py-2 text-base text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900">
              Email*
              <input
                type="email"
                name="email"
                required
                className="rounded-xl border border-slate-300 px-4 py-2 text-base text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900">
              Mobile*
              <input
                type="tel"
                name="mobile"
                required
                className="rounded-xl border border-slate-300 px-4 py-2 text-base text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900">
              City
              <input
                type="text"
                name="city"
                className="rounded-xl border border-slate-300 px-4 py-2 text-base text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-slate-900">
              Country
              <input
                type="text"
                name="country"
                className="rounded-xl border border-slate-300 px-4 py-2 text-base text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm font-medium text-slate-900">
            Tell us more*
            <textarea
              name="message"
              rows="4"
              required
              className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </label>

          <div
            className="g-recaptcha"
            data-sitekey={RECAPTCHA_SITE_KEY}
            data-callback="handleCaptchaChange"
          />

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={!isVerified}
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-2 font-semibold text-white shadow-lg transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              Submit enquiry
            </button>
            <button
              type="reset"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-2 font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm2;
