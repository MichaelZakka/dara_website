'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function ContactPage() {
  const { t, dir, language } = useLanguage();
  const fontFamily = dir === 'rtl' ? 'var(--font-cairo)' : 'var(--font-montserrat)';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [sending, setSending] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert(language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSending(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className={styles.contactPage} style={{ direction: dir, fontFamily }}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/dev" className={styles.logo}>
            <Image 
              src="/logo_transparent.png" 
              alt="DARA Logo" 
              width={50} 
              height={50}
              className={styles.logoImage}
            />
            <span className={styles.logoText} style={{ fontFamily }}>DARA</span>
          </Link>
          
          <div className={styles.navLinks}>
            <Link href="/dev" className={styles.navLink} style={{ fontFamily }}>{t.nav.home}</Link>
            <Link href="/dev/services" className={styles.navLink} style={{ fontFamily }}>{t.nav.services}</Link>
            <Link href="/dev/gallery" className={styles.navLink} style={{ fontFamily }}>{t.nav.gallery}</Link>
            <Link href="/dev/about" className={styles.navLink} style={{ fontFamily }}>{t.nav.about}</Link>
            <Link href="/dev/contact" className={styles.navLink} style={{ fontFamily }}>{t.nav.contact}</Link>
          </div>

          <div className={styles.navRight}>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroPattern}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroIcon}>💬</div>
          <h1 className={styles.heroTitle} style={{ fontFamily }}>
            {t.contact.heroTitle}
          </h1>
          <p className={styles.heroSubtitle} style={{ fontFamily }}>
            {t.contact.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.contentGrid}>
            {/* Contact Information Sidebar */}
            <div className={styles.contactInfo}>
              {/* Contact Info Card */}
              <div className={styles.contactCard}>
                <h2 className={styles.cardTitle} style={{ fontFamily }}>
                  <span className={styles.cardIcon}>📞</span>
                  {t.contact.contactInfo}
                </h2>

                {/* Email */}
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📧</div>
                  <div className={styles.infoContent}>
                    <div className={styles.infoLabel} style={{ fontFamily }}>
                      {t.contact.emailUs}
                    </div>
                    <a href={`mailto:${t.emailValue}`} className={styles.infoLink}>
                      <div className={styles.infoValue} style={{ fontFamily }}>
                        {t.emailValue}
                      </div>
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                {t.phoneNumbers.map((phone, index) => (
                  <div key={index} className={styles.infoItem}>
                    <div className={styles.infoIcon}>📱</div>
                    <div className={styles.infoContent}>
                      <div className={styles.infoLabel} style={{ fontFamily }}>
                        {t.contact.callUs} {index + 1}
                      </div>
                      <a href={`tel:${phone}`} className={styles.infoLink}>
                        <div className={styles.infoValue} style={{ fontFamily }}>
                          {phone}
                        </div>
                      </a>
                    </div>
                  </div>
                ))}

                {/* Locations */}
                {t.locationValues.map((location, index) => (
                  <div key={index} className={styles.infoItem}>
                    <div className={styles.infoIcon}>📍</div>
                    <div className={styles.infoContent}>
                      <div className={styles.infoLabel} style={{ fontFamily }}>
                        {t.contact.visitUs} {index + 1}
                      </div>
                      <div className={styles.infoValue} style={{ fontFamily }}>
                        {location}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Office Hours */}
                <div className={styles.officeHours}>
                  <div className={styles.hoursTitle} style={{ fontFamily }}>
                    🕐 {t.contact.officeHours}
                  </div>
                  <div className={styles.hourItem} style={{ fontFamily }}>
                    {t.contact.officeHoursTime}
                  </div>
                  <div className={styles.hourItem} style={{ fontFamily }}>
                    {t.contact.officeHoursFriday}
                  </div>
                  <div className={styles.hourItem} style={{ fontFamily }}>
                    {t.contact.officeHoursSaturday}
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className={`${styles.contactCard} ${styles.socialCard}`}>
                <h2 className={styles.cardTitle} style={{ fontFamily }}>
                  <span className={styles.cardIcon}>🌐</span>
                  {t.contact.socialMedia}
                </h2>
                <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem', opacity: 0.9, fontFamily }}>
                  {t.contact.socialSubtitle}
                </p>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>📘</span>
                    <span className={styles.socialName} style={{ fontFamily }}>Facebook</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>📷</span>
                    <span className={styles.socialName} style={{ fontFamily }}>Instagram</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>💼</span>
                    <span className={styles.socialName} style={{ fontFamily }}>LinkedIn</span>
                  </a>
                  <a href="#" className={styles.socialLink}>
                    <span className={styles.socialIcon}>🐦</span>
                    <span className={styles.socialName} style={{ fontFamily }}>Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formSection}>
              <h2 className={styles.formTitle} style={{ fontFamily }}>
                {t.contact.formTitle}
              </h2>
              <p className={styles.formSubtitle} style={{ fontFamily }}>
                {t.contact.formSubtitle}
              </p>

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} style={{ fontFamily }}>
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className={styles.formInput}
                    style={{ fontFamily }}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} style={{ fontFamily }}>
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className={styles.formInput}
                    style={{ fontFamily }}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} style={{ fontFamily }}>
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className={styles.formInput}
                    style={{ fontFamily }}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} style={{ fontFamily }}>
                    {t.contact.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className={styles.formInput}
                    style={{ fontFamily }}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel} style={{ fontFamily }}>
                    {t.contact.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className={styles.formTextarea}
                    style={{ fontFamily }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  style={{ fontFamily }}
                  disabled={sending}
                >
                  {sending ? t.contact.sending : t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className={styles.workingHoursSection}>
        <div className={styles.workingHoursContainer}>
          <h2 className={styles.sectionTitle} style={{ fontFamily }}>
            {t.contact.workingHoursTitle}
          </h2>
          <p className={styles.sectionSubtitle} style={{ fontFamily }}>
            {t.contact.workingHoursSubtitle}
          </p>

          <div className={styles.hoursGrid}>
            <div className={styles.hourCard}>
              <div className={styles.hourCardIcon}>📅</div>
              <div className={styles.hourCardDay} style={{ fontFamily }}>
                {language === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}
              </div>
              <div className={styles.hourCardTime} style={{ fontFamily }}>
                9:00 {language === 'ar' ? 'صباحًا' : 'AM'} - 6:00 {language === 'ar' ? 'مساءً' : 'PM'}
              </div>
              <div className={styles.hourCardStatus} style={{ fontFamily }}>
                ✓ {language === 'ar' ? 'مفتوح' : 'Open'}
              </div>
            </div>

            <div className={`${styles.hourCard} ${styles.closedCard}`}>
              <div className={styles.hourCardIcon}>🚫</div>
              <div className={styles.hourCardDay} style={{ fontFamily }}>
                {language === 'ar' ? 'الجمعة' : 'Friday'}
              </div>
              <div className={styles.hourCardTime} style={{ fontFamily }}>
                {language === 'ar' ? 'عطلة' : 'Day Off'}
              </div>
              <div className={styles.hourCardStatus} style={{ fontFamily }}>
                ✕ {language === 'ar' ? 'مغلق' : 'Closed'}
              </div>
            </div>

            <div className={styles.hourCard}>
              <div className={styles.hourCardIcon}>📅</div>
              <div className={styles.hourCardDay} style={{ fontFamily }}>
                {language === 'ar' ? 'السبت' : 'Saturday'}
              </div>
              <div className={styles.hourCardTime} style={{ fontFamily }}>
                10:00 {language === 'ar' ? 'صباحًا' : 'AM'} - 4:00 {language === 'ar' ? 'مساءً' : 'PM'}
              </div>
              <div className={styles.hourCardStatus} style={{ fontFamily }}>
                ✓ {language === 'ar' ? 'مفتوح' : 'Open'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle} style={{ fontFamily }}>
            {t.contact.faqTitle}
          </h2>
          <p className={styles.sectionSubtitle} style={{ fontFamily }}>
            {t.contact.faqSubtitle}
          </p>

          <div className={styles.faqList}>
            {t.contact.faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaqIndex === index ? styles.faqItemOpen : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  style={{ fontFamily }}
                >
                  <span className={styles.faqQuestionText}>{faq.question}</span>
                  <span className={styles.faqIcon}>
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className={styles.faqAnswer}>
                  <p style={{ fontFamily }}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <h2 className={styles.mapTitle} style={{ fontFamily }}>
            {t.contact.mapTitle}
          </h2>
          <p className={styles.mapSubtitle} style={{ fontFamily }}>
            {t.contact.mapSubtitle}
          </p>

          <div className={styles.locationsGrid}>
            {t.locationValues.map((location, index) => (
              <div key={index} className={styles.locationCard}>
                <div className={styles.locationHeader}>
                  <div className={styles.locationIcon}>📍</div>
                  <div className={styles.locationName} style={{ fontFamily }}>
                    {index === 0 ? (language === 'ar' ? 'دمشق' : 'Damascus') : (language === 'ar' ? 'يبرود' : 'Yabroud')}
                  </div>
                </div>
                <p className={styles.locationAddress} style={{ fontFamily }}>
                  {location}
                </p>
                <a 
                  href={t.locationLinks[index]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.mapButton}
                  style={{ fontFamily }}
                >
                  <span>🗺️</span>
                  {t.viewOnMap}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>
                <Image 
                  src="/logo_transparent.png" 
                  alt="DARA Logo" 
                  width={50} 
                  height={50}
                  className={styles.footerLogoImage}
                />
                <span className={styles.footerLogoText} style={{ fontFamily }}>DARA</span>
              </div>
              <p className={styles.footerDescription} style={{ fontFamily }}>
                {t.footer.description}
              </p>
              <div className={styles.footerSocial}>
                <a href="#" className={styles.footerSocialLink} aria-label="Facebook">📘</a>
                <a href="#" className={styles.footerSocialLink} aria-label="Instagram">📷</a>
                <a href="#" className={styles.footerSocialLink} aria-label="LinkedIn">💼</a>
                <a href="#" className={styles.footerSocialLink} aria-label="Twitter">🐦</a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 style={{ fontFamily }}>{t.footer.quickLinks}</h3>
              <div className={styles.footerLinks}>
                <Link href="/dev" className={styles.footerLink} style={{ fontFamily }}>{t.nav.home}</Link>
                <Link href="/dev/services" className={styles.footerLink} style={{ fontFamily }}>{t.nav.services}</Link>
                <Link href="/dev/gallery" className={styles.footerLink} style={{ fontFamily }}>{t.nav.gallery}</Link>
                <Link href="/dev/about" className={styles.footerLink} style={{ fontFamily }}>{t.nav.about}</Link>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 style={{ fontFamily }}>{t.footer.services}</h3>
              <div className={styles.footerLinks}>
                {t.services.items.slice(0, 4).map((service, index) => (
                  <Link key={index} href="/dev/services" className={styles.footerLink} style={{ fontFamily }}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 style={{ fontFamily }}>{t.footer.contact}</h3>
              <div className={styles.footerContact}>
                <div className={styles.contactItem}>
                  <span>📧</span>
                  <span>{t.emailValue}</span>
                </div>
                <div className={styles.contactItem}>
                  <span>📞</span>
                  <span>{t.phoneNumbers[0]}</span>
                </div>
                <div className={styles.contactItem}>
                  <span>📍</span>
                  <span>{t.locationValues[0]}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright} style={{ fontFamily }}>
              © {new Date().getFullYear()} DARA LLC. {t.footer.rights}.
            </p>
            <div className={styles.footerLegal}>
              <a href="#" className={styles.footerLegalLink} style={{ fontFamily }}>{t.footer.privacy}</a>
              <a href="#" className={styles.footerLegalLink} style={{ fontFamily }}>{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

