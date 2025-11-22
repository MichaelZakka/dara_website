'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import styles from './page.module.css';

export default function Home() {
  const { t, dir } = useLanguage();

  return (
    <div className={styles.container} dir={dir}>
      <LanguageSwitcher />
      <main className={styles.main}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image 
            src="/logo_transparent.png" 
            alt="DARA LLC Logo" 
            width={200} 
            height={200}
            className={styles.logo}
            priority
          />
        </div>

        {/* Brand Name & Tagline */}
        <div className={styles.brandSection}>
          <h1 className={`${styles.brandName} ${styles.englishText}`}>
            DARA LLC
          </h1>
          <p className={`${styles.tagline} ${dir === 'rtl' ? styles.taglineArabic : styles.taglineEnglish}`}>
            "{t.tagline}"
          </p>
          
          {/* Status Badge */}
          <div className={styles.statusBadge}>
            <div className={styles.statusDot}></div>
            <span className={`${styles.statusText} ${dir === 'rtl' ? styles.statusTextArabic : styles.statusTextEnglish}`}>
              {t.status}
            </span>
          </div>
        </div>

        {/* Message */}
        <div className={styles.messageSection}>
          <p className={`${styles.message} ${dir === 'rtl' ? styles.messageArabic : styles.messageEnglish}`}>
            {t.message}
          </p>
        </div>

        {/* Contact Information */}
        <div className={styles.contactCard}>
          <h2 className={`${styles.contactTitle} ${dir === 'rtl' ? styles.contactTitleArabic : styles.contactTitleEnglish}`}>
            {t.getInTouch}
          </h2>
          
          <div className={styles.contactGrid}>
            {/* Email */}
            <div className={styles.contactItem}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`${styles.contactLabel} ${dir === 'rtl' ? styles.contactLabelArabic : styles.contactLabelEnglish}`}>
                {t.email}
              </h3>
              <a href={`mailto:${t.emailValue}`} className={`${styles.contactValue} ${styles.englishText}`}>
                {t.emailValue}
              </a>
            </div>

            {/* Phone */}
            <div className={styles.contactItem}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className={`${styles.contactLabel} ${dir === 'rtl' ? styles.contactLabelArabic : styles.contactLabelEnglish}`}>
                {t.phone}
              </h3>
              <div className={styles.phoneList}>
                {t.phoneNumbers.map((phone, index) => (
                  <a 
                    key={index}
                    href={`tel:${phone.replace(/[-\s]/g, '')}`} 
                    className={`${styles.contactValue} ${styles.phoneNumber} ${styles.englishText}`}
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className={styles.contactItem}>
              <div className={styles.iconContainer}>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className={`${styles.contactLabel} ${dir === 'rtl' ? styles.contactLabelArabic : styles.contactLabelEnglish}`}>
                {t.locations}
              </h3>
              <div className={styles.locationList}>
                {t.locationValues.map((location, index) => {
                  const link = t.locationLinks[index];
                  return (
                    <div key={index} className={styles.locationItem}>
                      <p className={`${styles.contactText} ${dir === 'rtl' ? styles.contactTextArabic : styles.contactTextEnglish}`}>
                        {location}
                      </p>
                      {link && (
                        <a 
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.mapButton}
                        >
                          <svg className={styles.mapIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          <span className={`${dir === 'rtl' ? styles.contactTextArabic : styles.contactTextEnglish}`}>
                            {t.viewOnMap}
                          </span>
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className={styles.footer}>
          <p className={`${styles.footerText} ${dir === 'rtl' ? styles.footerTextArabic : styles.footerTextEnglish}`}>
            {t.footerMessage}
          </p>
        </div>
      </main>
    </div>
  );
}
