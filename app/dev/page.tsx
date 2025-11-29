'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import styles from './page.module.css';

// Service Icons
const serviceIcons = ['🏛️', '🎨', '🖼️', '📋', '🌆', '🔧'];

// Project placeholders
const projectPlaceholders = ['🏠', '🏢', '🏛️'];

// Why Us Icons
const whyUsIcons = ['👥', '✓', '🎯', '💡'];

export default function DevPage() {
  const { t, dir, language } = useLanguage();
  const fontFamily = dir === 'rtl' ? 'var(--font-cairo)' : 'var(--font-montserrat)';

  return (
    <div style={{ direction: dir, fontFamily }}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Image 
              src="/logo_transparent.png" 
              alt="DARA Logo" 
              width={50} 
              height={50}
              className={styles.logoImage}
            />
            <span className={styles.logoText} style={{ fontFamily }}>DARA</span>
          </div>
          
          <div className={styles.navLinks}>
            <a href="#hero" className={styles.navLink} style={{ fontFamily }}>{t.nav.home}</a>
            <a href="/dev/services" className={styles.navLink} style={{ fontFamily }}>{t.nav.services}</a>
            <a href="/dev/gallery" className={styles.navLink} style={{ fontFamily }}>{t.nav.gallery}</a>
            <a href="/dev/about" className={styles.navLink} style={{ fontFamily }}>{t.nav.about}</a>
            <a href="/dev/contact" className={styles.navLink} style={{ fontFamily }}>{t.nav.contact}</a>
          </div>

          <div className={styles.navRight}>
      <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroPattern}></div>
          <div className={styles.heroGeometric}></div>
          <div className={styles.heroTriangle}></div>
        </div>
        
        <div className={styles.heroContent}>
          <span className={styles.heroTagline} style={{ fontFamily }}>DARA LLC</span>
          <h1 className={styles.heroTitle} style={{ fontFamily }}>{t.hero.title}</h1>
          <p className={styles.heroSubtitle} style={{ fontFamily }}>{t.hero.subtitle}</p>
          <p className={styles.heroDescription} style={{ fontFamily }}>{t.hero.description}</p>
          
          <div className={styles.heroButtons}>
            <button className={styles.btnPrimary} style={{ fontFamily }}>
              {t.hero.cta}
            </button>
            <button className={styles.btnSecondary} style={{ fontFamily }}>
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        <div className={styles.heroScroll}>
          <div className={styles.scrollIcon}></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>{t.services.title}</h2>
            <p className={styles.sectionSubtitle} style={{ fontFamily }}>{t.services.subtitle}</p>
          </div>

          <div className={styles.servicesGrid}>
            {t.services.items.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{serviceIcons[index]}</div>
                <h3 className={styles.serviceTitle} style={{ fontFamily }}>{service.title}</h3>
                <p className={styles.serviceDescription} style={{ fontFamily }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>{t.projects.title}</h2>
            <p className={styles.sectionSubtitle} style={{ fontFamily }}>{t.projects.subtitle}</p>
          </div>

          <div className={styles.projectsGrid}>
            {t.projects.items.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.projectImagePlaceholder}>
                    {projectPlaceholders[index]}
                  </div>
                </div>
                <div className={styles.projectOverlay}>
                  <span className={styles.projectCategory} style={{ fontFamily }}>{project.category}</span>
                  <h3 className={styles.projectTitle} style={{ fontFamily }}>{project.title}</h3>
                  <p className={styles.projectDescription} style={{ fontFamily }}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.projectsViewAll}>
            <a href="/dev/gallery">
              <button className={styles.btnOutline} style={{ fontFamily }}>
                {t.projects.viewAll}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className={styles.whyUs}>
        <div className={styles.whyUsPattern}></div>
        <div className={styles.sectionContainer}>
          <div className={styles.whyUsContent}>
            <div className={styles.whyUsSectionHeader}>
              <h2 className={styles.whyUsSectionTitle} style={{ fontFamily }}>{t.whyUs.title}</h2>
              <p className={styles.whyUsSectionSubtitle} style={{ fontFamily }}>{t.whyUs.subtitle}</p>
            </div>

            <div className={styles.whyUsGrid}>
              {t.whyUs.items.map((item, index) => (
                <div key={index} className={styles.whyUsCard}>
                  <div className={styles.whyUsIcon}>{whyUsIcons[index]}</div>
                  <h3 className={styles.whyUsCardTitle} style={{ fontFamily }}>{item.title}</h3>
                  <p className={styles.whyUsCardDescription} style={{ fontFamily }}>{item.description}</p>
                </div>
              ))}
            </div>

            <div className={styles.statsGrid}>
              {t.whyUs.stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statValue} style={{ fontFamily }}>{stat.value}</div>
                  <div className={styles.statLabel} style={{ fontFamily }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Feedback Section */}
      <section id="feedback" className={styles.feedback}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>{t.feedback.title}</h2>
            <p className={styles.sectionSubtitle} style={{ fontFamily }}>{t.feedback.subtitle}</p>
          </div>

          <div className={styles.feedbackGrid}>
            {t.feedback.items.map((item, index) => (
              <div key={index} className={styles.feedbackCard}>
                <div className={styles.feedbackQuote}>&ldquo;</div>
                <div className={styles.feedbackStars}>
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className={styles.star}>★</span>
                  ))}
                </div>
                <p className={styles.feedbackContent} style={{ fontFamily }}>{item.content}</p>
                <div className={styles.feedbackAuthor}>
                  <div className={styles.feedbackAvatar}>
                    {item.name.charAt(0)}
                  </div>
                  <div className={styles.feedbackInfo}>
                    <h4 style={{ fontFamily }}>{item.name}</h4>
                    <p style={{ fontFamily }}>{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className={styles.cta}>
        <div className={styles.ctaBackground}></div>
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
      <footer id="contact" className={styles.footer}>
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
                <a href="#hero" className={styles.footerLink} style={{ fontFamily }}>{t.nav.home}</a>
                <a href="/dev/services" className={styles.footerLink} style={{ fontFamily }}>{t.nav.services}</a>
                <a href="/dev/gallery" className={styles.footerLink} style={{ fontFamily }}>{t.nav.gallery}</a>
                <a href="/dev/about" className={styles.footerLink} style={{ fontFamily }}>{t.nav.about}</a>
              </div>
            </div>

            <div className={styles.footerColumn}>
              <h3 style={{ fontFamily }}>{t.footer.services}</h3>
              <div className={styles.footerLinks}>
                {t.services.items.slice(0, 4).map((service, index) => (
                  <a key={index} href="/dev/services" className={styles.footerLink} style={{ fontFamily }}>
                    {service.title}
                  </a>
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
