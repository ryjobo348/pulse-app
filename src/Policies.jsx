const today = "21 March 2026";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Playfair+Display:wght@400;700&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:#0A0A0F}
::-webkit-scrollbar-thumb{background:#2A2A3A;border-radius:99px}
body{background:#0A0A0F;color:#F0EBE1;font-family:'DM Sans',sans-serif}
.policy-wrap{max-width:680px;margin:0 auto;padding:40px 24px 80px}
.policy-back{display:inline-flex;align-items:center;gap:8px;color:#5A5AFF;font-size:14px;text-decoration:none;margin-bottom:32px;cursor:pointer;background:none;border:none;font-family:'DM Sans',sans-serif;transition:opacity .2s}
.policy-back:hover{opacity:.75}
.policy-title{font-family:'Playfair Display',serif;font-size:36px;font-weight:700;margin-bottom:6px;background:linear-gradient(135deg,#F0EBE1 30%,#A0A0C8 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.policy-subtitle{font-size:14px;color:#5A5AFF;margin-bottom:4px;font-weight:600}
.policy-date{font-size:13px;color:#555570;margin-bottom:40px;font-style:italic}
.policy-divider{height:1px;background:linear-gradient(90deg,#5A5AFF33,transparent);margin-bottom:40px}
.policy-h2{font-size:18px;font-weight:700;color:#F0EBE1;margin:36px 0 12px;padding-bottom:8px;border-bottom:1px solid #1E1E2A}
.policy-p{font-size:15px;color:#C0BBDA;line-height:1.75;margin-bottom:14px}
.policy-ul{margin:0 0 14px 0;padding-left:0;list-style:none}
.policy-ul li{font-size:15px;color:#C0BBDA;line-height:1.75;padding:4px 0 4px 22px;position:relative}
.policy-ul li::before{content:"•";color:#5A5AFF;position:absolute;left:4px;font-size:16px}
.policy-highlight{background:#12122A;border:1px solid #3A3A66;border-radius:14px;padding:20px 24px;margin-bottom:20px}
.policy-highlight .policy-p{margin-bottom:0;color:#A0A0D0}
`;

function PolicyPage({ title, subtitle, children, onBack }) {
  return (
    <div style={{minHeight:"100vh",background:"#0A0A0F"}}>
      <style>{CSS}</style>
      <div className="policy-wrap">
        <button className="policy-back" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to Pulse
        </button>
        <div className="policy-subtitle">{subtitle}</div>
        <div className="policy-title">{title}</div>
        <div className="policy-date">Last updated: {today}</div>
        <div className="policy-divider"/>
        {children}
      </div>
    </div>
  );
}

function P({children}) { return <p className="policy-p">{children}</p>; }
function H2({children}) { return <h2 className="policy-h2">{children}</h2>; }
function UL({items}) { return <ul className="policy-ul">{items.map((item,i)=><li key={i}>{item}</li>)}</ul>; }
function Highlight({children}) { return <div className="policy-highlight"><p className="policy-p">{children}</p></div>; }

export function PrivacyPage({ onBack }) {
  return (
    <PolicyPage title="Privacy Policy" subtitle="Pulse Habit Tracker" onBack={onBack}>
      <Highlight>This Privacy Policy explains how Pulse collects, uses, and protects your personal data in accordance with UK GDPR and the Data Protection Act 2018.</Highlight>

      <H2>1. Who We Are</H2>
      <P>Pulse is a habit tracking application operated as a sole trader business based in the United Kingdom. In this policy, "we", "us" and "our" refers to the operator of Pulse.</P>
      <P>If you have any questions about this Privacy Policy, please contact us through the app at: pulse-app-taupe.vercel.app</P>

      <H2>2. What Information We Collect</H2>
      <P>We collect the following personal information when you use Pulse:</P>
      <UL items={[
        "Email address — used to create and manage your account",
        "Name — used to personalise your experience within the app",
        "Password — stored securely in encrypted form, never readable by us",
        "Habit data — the habits you create, your completion logs, and streak history",
        "Subscription status — whether you are on the Free or Pro plan",
        "Device and browser information — collected automatically for security and performance purposes",
      ]}/>

      <H2>3. How We Use Your Information</H2>
      <P>We use your personal information for the following purposes:</P>
      <UL items={[
        "To create and manage your account",
        "To provide the Pulse habit tracking service",
        "To send you account-related emails such as email verification and password reset links",
        "To process and manage your subscription if you upgrade to Pro",
        "To improve the app and fix technical issues",
        "To comply with our legal obligations",
      ]}/>

      <H2>4. Legal Basis for Processing (UK GDPR)</H2>
      <P>Under UK GDPR, we process your personal data on the following legal bases:</P>
      <UL items={[
        "Contract: Processing is necessary to provide the Pulse service you have signed up for",
        "Legitimate interests: To maintain the security and performance of the app",
        "Legal obligation: To comply with applicable UK laws and regulations",
      ]}/>

      <H2>5. How We Store Your Data</H2>
      <P>Your data is stored securely using Supabase, a cloud database provider. All data is encrypted in transit using HTTPS and encrypted at rest. Supabase operates data centres within the European Union.</P>
      <P>Passwords are hashed using industry-standard encryption and are never stored in plain text. We do not have access to your password.</P>

      <H2>6. Data Sharing</H2>
      <P>We do not sell, rent, or trade your personal information. We share your data only with the following trusted third-party service providers:</P>
      <UL items={[
        "Supabase (supabase.com) — database and authentication provider",
        "Vercel (vercel.com) — hosting provider",
        "Stripe (stripe.com) — payment processing for Pro subscriptions",
        "Resend (resend.com) — email delivery service",
      ]}/>
      <P>Each of these providers handles your data in accordance with GDPR.</P>

      <H2>7. Payments</H2>
      <P>If you subscribe to Pulse Pro, your payment is processed by Stripe. We do not store your card details. Stripe is a PCI-compliant payment processor. For more information visit stripe.com/privacy.</P>

      <H2>8. How Long We Keep Your Data</H2>
      <P>We retain your personal data for as long as your account is active. If you delete your account, all your personal data including habits and streak history will be permanently deleted within 30 days.</P>
      <P>We may retain certain data for longer if required by law or for legitimate business purposes such as fraud prevention.</P>

      <H2>9. Your Rights Under UK GDPR</H2>
      <P>You have the following rights regarding your personal data:</P>
      <UL items={[
        "Right of access: You can request a copy of the personal data we hold about you",
        "Right to rectification: You can ask us to correct inaccurate data",
        "Right to erasure: You can request that we delete your personal data",
        "Right to restrict processing: You can ask us to limit how we use your data",
        "Right to data portability: You can request your data in a machine-readable format",
        "Right to object: You can object to certain types of processing",
      ]}/>
      <P>To exercise any of these rights, please contact us through the app. We will respond within 30 days.</P>
      <P>You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk if you believe your data has been handled unlawfully.</P>

      <H2>10. Cookies</H2>
      <P>Pulse uses essential cookies and local storage to keep you logged in and remember your preferences such as language and currency settings. We do not use advertising or tracking cookies. For full details please see our Cookie Policy.</P>

      <H2>11. Children's Privacy</H2>
      <P>Pulse is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.</P>

      <H2>12. Changes to This Policy</H2>
      <P>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page.</P>

      <H2>13. Contact Us</H2>
      <P>If you have any questions about this Privacy Policy, please contact us through the Pulse app at: pulse-app-taupe.vercel.app</P>
    </PolicyPage>
  );
}

export function TermsPage({ onBack }) {
  return (
    <PolicyPage title="Terms of Service" subtitle="Pulse Habit Tracker" onBack={onBack}>
      <Highlight>By creating an account or using Pulse, you agree to be bound by these Terms of Service. Please read them carefully before using the app.</Highlight>

      <H2>1. Acceptance of Terms</H2>
      <P>These Terms of Service constitute a legally binding agreement between you and the operator of Pulse, a sole trader based in the United Kingdom.</P>

      <H2>2. Description of Service</H2>
      <P>Pulse is a habit tracking application that allows users to create, track, and manage personal habits. Pulse offers two tiers of service:</P>
      <UL items={[
        "Free Plan: Access to up to 3 habits with basic tracking features",
        "Pro Plan: Unlimited habits, advanced statistics, streak editing, and additional features, available via a paid monthly or annual subscription",
      ]}/>

      <H2>3. Account Registration</H2>
      <P>To use Pulse, you must create an account. You agree to:</P>
      <UL items={[
        "Provide accurate and complete information when creating your account",
        "Keep your login credentials secure and not share them with others",
        "Notify us immediately if you suspect unauthorised access to your account",
        "Be responsible for all activity that occurs under your account",
      ]}/>
      <P>You must be at least 13 years old to create an account.</P>

      <H2>4. Subscriptions and Payments</H2>
      <P>4.1 Free Plan: The Free Plan is available at no cost and includes up to 3 habits.</P>
      <P>4.2 Pro Plan: Available on a monthly or annual subscription basis. Current pricing is displayed in the app.</P>
      <P>4.3 Billing: Subscriptions are billed in advance. Payment is processed securely by Stripe. By subscribing, you authorise us to charge your payment method on a recurring basis.</P>
      <P>4.4 Cancellation: You may cancel at any time. You will retain Pro access until the end of your current billing period. No refunds are given for unused time.</P>
      <P>4.5 No Refunds: All subscription payments are final and non-refundable, except where required by applicable UK consumer law. Please see our Refund Policy for full details.</P>
      <P>4.6 Price Changes: We will give you at least 30 days notice before any price change takes effect.</P>

      <H2>5. Acceptable Use</H2>
      <P>You must not:</P>
      <UL items={[
        "Use the Service in any way that violates applicable UK or international law",
        "Attempt to gain unauthorised access to our systems or another user's account",
        "Use automated tools to access or scrape the Service",
        "Upload or transmit any malicious code or harmful content",
        "Impersonate any person or organisation",
      ]}/>

      <H2>6. Intellectual Property</H2>
      <P>The Pulse application, including its design, code, branding, and content, is owned by the operator and protected by UK and international intellectual property laws.</P>
      <P>You retain ownership of the habit data you create. By using the Service, you grant us a limited licence to store and process your data solely to provide the Service.</P>

      <H2>7. Data and Privacy</H2>
      <P>Your use of Pulse is governed by our Privacy Policy, which is incorporated into these Terms by reference.</P>

      <H2>8. Service Availability</H2>
      <P>We aim to keep Pulse available at all times but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with reasonable notice where possible.</P>

      <H2>9. Limitation of Liability</H2>
      <P>To the fullest extent permitted by UK law, we shall not be liable for any indirect, incidental, or consequential loss arising from your use of the Service. Our total liability shall not exceed the amount you have paid us in the 12 months preceding the claim.</P>
      <P>Nothing in these Terms excludes liability for death or personal injury caused by our negligence, or any other liability that cannot be limited by UK law.</P>

      <H2>10. Termination</H2>
      <P>You may delete your account at any time through the app. We reserve the right to suspend or terminate your account if you violate these Terms. No refunds will be issued upon termination for breach of these Terms.</P>

      <H2>11. Governing Law</H2>
      <P>These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</P>

      <H2>12. Consumer Rights</H2>
      <P>Your statutory rights as a UK consumer under the Consumer Rights Act 2015 and the Consumer Contracts Regulations 2013 are not affected by these Terms.</P>

      <H2>13. Changes to These Terms</H2>
      <P>We may update these Terms from time to time and will notify you of significant changes. Continued use of the Service constitutes acceptance of the new Terms.</P>

      <H2>14. Contact Us</H2>
      <P>If you have any questions about these Terms, please contact us through the Pulse app at: pulse-app-taupe.vercel.app</P>
    </PolicyPage>
  );
}

export function RefundPage({ onBack }) {
  return (
    <PolicyPage title="Refund Policy" subtitle="Pulse Habit Tracker" onBack={onBack}>
      <Highlight>All Pulse Pro subscription payments are final and non-refundable. By subscribing, you agree to this policy. Please read carefully before purchasing.</Highlight>

      <H2>1. No Refund Policy</H2>
      <P>All payments made for Pulse Pro subscriptions are final and non-refundable. This includes:</P>
      <UL items={[
        "Monthly subscription payments",
        "Annual subscription payments",
        "Partial months or years remaining after cancellation",
        "Subscriptions cancelled due to account deletion",
        "Subscriptions terminated due to a breach of our Terms of Service",
      ]}/>

      <H2>2. Cancellation</H2>
      <P>You may cancel your Pulse Pro subscription at any time. Upon cancellation:</P>
      <UL items={[
        "You will retain full access to Pro features until the end of your current billing period",
        "You will not be charged again after the current billing period ends",
        "No refund will be issued for the remaining days in your billing period",
      ]}/>
      <P>To cancel, go to your Account settings within the Pulse app.</P>

      <H2>3. Free Plan</H2>
      <P>The Pulse Free Plan is available at no cost. There is nothing to refund for Free Plan users.</P>

      <H2>4. Your Statutory Rights</H2>
      <P>Nothing in this Refund Policy is intended to limit your statutory rights as a UK consumer. In particular:</P>
      <UL items={[
        "Under the Consumer Contracts Regulations 2013, you may have a right to cancel within 14 days of purchase. However, by subscribing to Pulse Pro and accessing Pro features immediately, you acknowledge that you are waiving this right.",
        "If a technical fault on our part prevents you from accessing the Service you have paid for, please contact us and we will investigate, which may include a full or partial refund at our discretion.",
        "Your rights under the Consumer Rights Act 2015 are not affected by this policy.",
      ]}/>

      <H2>5. Billing Errors</H2>
      <P>If you believe you have been charged incorrectly or in error, please contact us immediately. We will investigate all billing complaints promptly and issue a refund if a billing error is confirmed.</P>

      <H2>6. Contact Us</H2>
      <P>If you have any questions about this Refund Policy or believe you have experienced a billing error, please contact us through the Pulse app at: pulse-app-taupe.vercel.app</P>
      <P>We aim to respond to all queries within 5 business days.</P>
    </PolicyPage>
  );
}

export function CookiePage({ onBack }) {
  return (
    <PolicyPage title="Cookie Policy" subtitle="Pulse Habit Tracker" onBack={onBack}>
      <Highlight>Pulse uses only essential cookies and local storage. We do not use advertising, tracking, or analytics cookies of any kind.</Highlight>

      <H2>1. What Are Cookies?</H2>
      <P>Cookies are small text files stored on your device when you use a web application. Pulse also uses "local storage", which works similarly and stores your preferences directly in your browser.</P>

      <H2>2. How Pulse Uses Cookies</H2>

      <H2>2.1 Authentication Cookies (Essential)</H2>
      <P>When you log in to Pulse, we store a secure session token to keep you logged in.</P>
      <UL items={[
        "Purpose: To keep you logged in securely",
        "Type: Essential — cannot be disabled without breaking the app",
        "Provider: Supabase (our authentication provider)",
        "Duration: Until you log out or the session expires",
      ]}/>

      <H2>2.2 Preference Storage (Essential)</H2>
      <P>We store your app preferences in local storage so they are remembered between sessions.</P>
      <UL items={[
        "Language preference — remembers your selected language",
        "Currency preference — remembers your selected currency",
        "Type: Essential functional storage",
        "Duration: Until you clear your browser data or change the setting",
      ]}/>

      <H2>3. Third-Party Cookies</H2>

      <H2>3.1 Supabase</H2>
      <P>Supabase is our database and authentication provider. It sets cookies to manage your login session securely. For more information visit: supabase.com/privacy</P>

      <H2>3.2 Stripe</H2>
      <P>If you subscribe to Pulse Pro, Stripe processes your payment and may set cookies for fraud prevention and security. For more information visit: stripe.com/cookies-policy</P>

      <H2>3.3 Vercel</H2>
      <P>Vercel hosts the Pulse application and may set cookies for performance and security. For more information visit: vercel.com/legal/privacy-policy</P>

      <H2>4. What We Do NOT Use Cookies For</H2>
      <UL items={[
        "Advertising or retargeting",
        "Tracking you across other websites",
        "Analytics or behavioural profiling",
        "Selling data to third parties",
      ]}/>

      <H2>5. Managing Cookies</H2>
      <P>Since Pulse only uses essential cookies, disabling them may prevent the app from functioning correctly. You can manage cookies through your browser settings:</P>
      <UL items={[
        "Google Chrome: Settings > Privacy and Security > Cookies and other site data",
        "Safari: Settings > Safari > Privacy & Security",
        "Firefox: Options > Privacy & Security > Cookies and Site Data",
        "Microsoft Edge: Settings > Cookies and site permissions",
      ]}/>
      <P>Please note that clearing cookies will log you out of Pulse and reset your saved preferences.</P>

      <H2>6. Changes to This Policy</H2>
      <P>We may update this Cookie Policy from time to time. When we do, we will update the "Last updated" date at the top of this page.</P>

      <H2>7. Contact Us</H2>
      <P>If you have any questions about this Cookie Policy, please contact us through the Pulse app at: pulse-app-taupe.vercel.app</P>
    </PolicyPage>
  );
}
