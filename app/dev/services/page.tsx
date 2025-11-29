'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function ServicesPage() {
  const { t, dir, language } = useLanguage();
  const fontFamily = dir === 'rtl' ? 'var(--font-cairo)' : 'var(--font-montserrat)';

  return (
    <div className={styles.servicesPage} style={{ direction: dir, fontFamily }}>
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
            {t.servicesPage.heroTitle}
          </h1>
          <p className={styles.heroSubtitle} style={{ fontFamily }}>
            {t.servicesPage.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className={styles.approachSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {t.servicesPage.ourApproach.title}
            </h2>
            <p className={styles.sectionSubtitle} style={{ fontFamily }}>
              {t.servicesPage.ourApproach.subtitle}
            </p>
          </div>

          <div className={styles.approachGrid}>
            {t.servicesPage.ourApproach.steps.map((step, index) => (
              <div key={index} className={styles.approachCard}>
                <div className={styles.approachNumber}>{index + 1}</div>
                <h3 className={styles.approachTitle} style={{ fontFamily }}>
                  {step.title}
                </h3>
                <p className={styles.approachDescription} style={{ fontFamily }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {t.servicesPage.pageTitle}
            </h2>
          </div>

          {t.servicesPage.detailedServices.map((service, index) => (
            <div key={index} className={styles.serviceDetailCard}>
              {/* Service Header */}
              <div className={styles.serviceHeader}>
                <div className={styles.serviceHeaderContent}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <div className={styles.serviceHeaderText}>
                    <h3 style={{ fontFamily }}>{service.title}</h3>
                    <p className={styles.serviceTagline} style={{ fontFamily }}>
                      {service.tagline}
                    </p>
                    <p className={styles.serviceDescription} style={{ fontFamily }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Body */}
              <div className={styles.serviceBody}>
                {/* Features */}
                <h4 className={styles.serviceSubtitle} style={{ fontFamily }}>
                  {language === 'ar' ? 'الخدمات المقدمة' : 'What We Offer'}
                </h4>
                <div className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={styles.featureItem}>
                      <div className={styles.featureIcon}>✓</div>
                      <div className={styles.featureText} style={{ fontFamily }}>
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Process */}
                <div className={styles.processBox}>
                  <h5 className={styles.processTitle} style={{ fontFamily }}>
                    {language === 'ar' ? 'عمليتنا' : 'Our Process'}
                  </h5>
                  <p className={styles.processDescription} style={{ fontFamily }}>
                    {service.process}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {t.servicesPage.whyChoose.title}
            </h2>
          </div>

          <div className={styles.whyChooseGrid}>
            {t.servicesPage.whyChoose.items.map((item, index) => (
              <div key={index} className={styles.whyChooseCard}>
                <div className={styles.whyChooseIcon}>{item.icon}</div>
                <h3 className={styles.whyChooseTitle} style={{ fontFamily }}>
                  {item.title}
                </h3>
                <p className={styles.whyChooseDescription} style={{ fontFamily }}>
                  {item.description}
                </p>
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

