'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
  const { t, dir, language } = useLanguage();
  const fontFamily = dir === 'rtl' ? 'var(--font-cairo)' : 'var(--font-montserrat)';

  return (
    <div className={styles.aboutPage} style={{ direction: dir, fontFamily }}>
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
          <h1 className={styles.heroTitle} style={{ fontFamily }}>
            {t.about.heroTitle}
          </h1>
          <p className={styles.heroSubtitle} style={{ fontFamily }}>
            {t.about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`${styles.contentSection} ${styles.whyChooseUs}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.titleIcon}>🎯</div>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {t.about.whyChooseUs.title}
            </h2>
          </div>
          
          <div className={styles.paragraphsContainer}>
            {t.about.whyChooseUs.paragraphs.map((paragraph, index) => (
              <div key={index} className={styles.paragraph} style={{ fontFamily }}>
                <div className={styles.paragraphNumber}>{index + 1}</div>
                <div className={styles.paragraphContent}>{paragraph}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className={`${styles.contentSection} ${styles.whoWeAre}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.titleIconLight}>🏛️</div>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {t.about.whoWeAre.title}
            </h2>
          </div>
          
          <div className={styles.whoWeAreContent} style={{ fontFamily }}>
            <div className={styles.quoteIcon}>"</div>
            {t.about.whoWeAre.content}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className={`${styles.contentSection} ${styles.visionSection}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.titleIcon}>🔭</div>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {t.about.ourVision.title}
            </h2>
          </div>
          
          <div className={styles.listContainer}>
            {t.about.ourVision.items.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.listIconWrapper}>
                  <div className={styles.listIcon}>{index + 1}</div>
                  <div className={styles.iconBadge}>
                    {index === 0 && '🌍'}
                    {index === 1 && '🏗️'}
                    {index === 2 && '⭐'}
                  </div>
                </div>
                <div className={styles.listText} style={{ fontFamily }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values and Goals Section */}
      <section className={`${styles.contentSection} ${styles.valuesSection}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.titleIcon}>💎</div>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {t.about.valuesGoals.title}
            </h2>
          </div>
          
          <div className={styles.listContainer}>
            {t.about.valuesGoals.items.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.listIconWrapper}>
                  <div className={styles.listIcon}>✓</div>
                  <div className={styles.iconBadge}>
                    {index === 0 && '🎯'}
                    {index === 1 && '✨'}
                    {index === 2 && '🌱'}
                  </div>
                </div>
                <div className={styles.listText} style={{ fontFamily }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Philosophy Section */}
      <section className={`${styles.contentSection} ${styles.philosophySection}`}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionTitleContainer}>
            <div className={styles.titleIcon}>💡</div>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {t.about.projectPhilosophy.title}
            </h2>
          </div>
          
          <div className={styles.philosophyContent}>
            {t.about.projectPhilosophy.paragraphs.map((paragraph, index) => (
              <div key={index} className={styles.philosophyParagraph} style={{ fontFamily }}>
                <div className={styles.philosophyNumber}>
                  <span>{index + 1}</span>
                </div>
                <div className={styles.philosophyText}>{paragraph}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle} style={{ fontFamily }}>{t.cta.title}</h2>
          <p className={styles.ctaSubtitle} style={{ fontFamily }}>{t.cta.subtitle}</p>
          <div className={styles.ctaButtons}>
            <button className={styles.btnPrimary} style={{ fontFamily }}>
              {t.cta.button}
            </button>
            <button className={styles.btnSecondary} style={{ fontFamily }}>
              {t.cta.buttonSecondary}
            </button>
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
                <a href="#" className={styles.socialLink} aria-label="Facebook">📘</a>
                <a href="#" className={styles.socialLink} aria-label="Instagram">📷</a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">💼</a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">🐦</a>
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

