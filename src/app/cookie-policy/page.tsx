export default function CookiePolicy() {
    return (
        <main className="min-h-screen text-white/90" style={{ background: "var(--foreground)" }}>
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold mb-8 text-white">Cookie Policy</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-base leading-relaxed">
                    <p className="text-white/70">Last updated: March 1, 2026</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files that are stored on your device (computer, tablet, smartphone, etc.) when you visit a website. They allow websites to remember information about your visit, such as your preferences and login information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Types of Cookies We Use</h2>

                        <h3 className="text-lg font-semibold text-white/90 mt-6 mb-3">2.1 Essential Cookies</h3>
                        <p>
                            These cookies are necessary for the website to function properly. They enable you to navigate the site and use its features, such as accessing secured areas. Without these cookies, the services you requested cannot be provided.
                        </p>

                        <h3 className="text-lg font-semibold text-white/90 mt-6 mb-3">2.2 Performance Cookies</h3>
                        <p>
                            These cookies help us understand how visitors interact with our website by collecting and reporting information. They help us improve the performance and design of our website. The information collected is aggregated and anonymous.
                        </p>

                        <h3 className="text-lg font-semibold text-white/90 mt-6 mb-3">2.3 Functional Cookies</h3>
                        <p>
                            These cookies allow us to remember your choices and preferences to provide a more personalized experience. For example, they remember your login information and language preferences.
                        </p>

                        <h3 className="text-lg font-semibold text-white/90 mt-6 mb-3">2.4 Targeting/Marketing Cookies</h3>
                        <p>
                            These cookies are used to deliver advertisements more relevant to you and your interests. They track your browsing habits and activity to help us understand your preferences.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Specific Cookies We Use</h2>
                        <div className="space-y-4">
                            <div className="p-3 rounded bg-white/5">
                                <p><strong>Cookie Name:</strong> session_id</p>
                                <p><strong>Type:</strong> Essential</p>
                                <p><strong>Purpose:</strong> Maintains your logged-in session</p>
                                <p><strong>Expires:</strong> Session end or after 30 days of inactivity</p>
                            </div>

                            <div className="p-3 rounded bg-white/5">
                                <p><strong>Cookie Name:</strong> preferences</p>
                                <p><strong>Type:</strong> Functional</p>
                                <p><strong>Purpose:</strong> Remembers your language and display preferences</p>
                                <p><strong>Expires:</strong> 1 year</p>
                            </div>

                            <div className="p-3 rounded bg-white/5">
                                <p><strong>Cookie Name:</strong> analytics_tracking</p>
                                <p><strong>Type:</strong> Performance</p>
                                <p><strong>Purpose:</strong> Tracks usage patterns and user behavior for analytics</p>
                                <p><strong>Expires:</strong> 2 years</p>
                            </div>

                            <div className="p-3 rounded bg-white/5">
                                <p><strong>Cookie Name:</strong> utm_source, utm_medium, utm_campaign</p>
                                <p><strong>Type:</strong> Targeting/Marketing</p>
                                <p><strong>Purpose:</strong> Tracks marketing campaign effectiveness</p>
                                <p><strong>Expires:</strong> 6 months</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Third-Party Services</h2>
                        <p>
                            We may use third-party services that also set cookies:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Analytics Providers:</strong> Services like Google Analytics that help us understand usage patterns</li>
                            <li><strong>Payment Processors:</strong> Such as Stripe, which may set cookies for secure transactions</li>
                            <li><strong>Social Media:</strong> Third-party widgets that may set their own cookies</li>
                            <li><strong>Advertising Networks:</strong> That may track your interests for targeted ads</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Local Storage and Similar Technologies</h2>
                        <p>
                            In addition to cookies, we may use other local storage technologies like Local Storage, Session Storage, and IndexedDB to store information on your device. These work similarly to cookies but typically store larger amounts of data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. How to Control Cookies</h2>
                        <p>
                            You have the right to decide whether to accept or reject cookies. You can control cookies through your browser settings:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                            <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
                            <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                            <li><strong>Edge:</strong> Settings → Privacy, search, and services → Clear browsing data</li>
                        </ul>
                        <p className="mt-4">
                            Please note that blocking essential cookies may prevent the website from functioning properly, and you may not be able to log in or use certain features.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Do Not Track (DNT)</h2>
                        <p>
                            Some browsers include a Do Not Track feature. Currently, there is no industry standard for recognizing DNT signals. We do not respond to DNT browser signals, though we provide you with the option to opt-out of cookies through your browser settings.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Your Privacy Rights</h2>
                        <p>
                            Depending on your location, you may have additional rights regarding cookies:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>GDPR (EU/EEA):</strong> You have the right to withdraw consent and opt-out of non-essential cookies</li>
                            <li><strong>CCPA (California):</strong> Right to know what data is collected and request deletion</li>
                            <li><strong>PIPEDA (Canada):</strong> Right to access and control your personal information</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Cookie Consent</h2>
                        <p>
                            When you first visit our website, you will see a cookie consent banner. We will:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Obtain your consent before setting non-essential cookies</li>
                            <li>Provide clear information about what cookies we use</li>
                            <li>Allow you to withdraw consent at any time</li>
                            <li>Only set essential cookies without consent</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Changes to This Policy</h2>
                        <p>
                            We may update this Cookie Policy periodically to reflect changes in technology, legislation, or other factors. We recommend you review this policy regularly. Continued use of the website after changes constitutes your acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Contact Us</h2>
                        <p>
                            If you have questions about this Cookie Policy or our use of cookies, please contact us:
                        </p>
                        <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                            <p><strong>Email:</strong> couplegoai.main@gmail.com</p>
                            <p className="mt-2"><strong>Discord:</strong> <a href="https://discord.gg/fA58tKnT" target="_blank" rel="noopener noreferrer" className="text-[var(--c-accent-light)] hover:underline">Join our Discord server</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}