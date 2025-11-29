'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function GalleryPage() {
  const { t, dir, language } = useLanguage();
  const fontFamily = dir === 'rtl' ? 'var(--font-cairo)' : 'var(--font-montserrat)';
  
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? t.gallery.projects 
    : t.gallery.projects.filter((project: any) => 
        project.category.toLowerCase() === activeFilter.toLowerCase() ||
        (activeFilter === t.gallery.filterResidential && project.category === (language === 'ar' ? 'سكني' : 'Residential')) ||
        (activeFilter === t.gallery.filterCommercial && project.category === (language === 'ar' ? 'تجاري' : 'Commercial')) ||
        (activeFilter === t.gallery.filterRestoration && project.category === (language === 'ar' ? 'ترميم' : 'Restoration')) ||
        (activeFilter === t.gallery.filterInstitutional && project.category === (language === 'ar' ? 'مؤسسي' : 'Institutional'))
      );

  const categories = [
    { key: 'all', label: t.gallery.filterAll },
    { key: t.gallery.filterResidential, label: t.gallery.filterResidential },
    { key: t.gallery.filterCommercial, label: t.gallery.filterCommercial },
    { key: t.gallery.filterRestoration, label: t.gallery.filterRestoration },
    { key: t.gallery.filterInstitutional, label: t.gallery.filterInstitutional }
  ];

  return (
    <div className={styles.galleryPage} style={{ direction: dir, fontFamily }}>
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
            {t.gallery.heroTitle}
          </h1>
          <p className={styles.heroSubtitle} style={{ fontFamily }}>
            {t.gallery.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category.key}
              className={`${styles.filterButton} ${activeFilter === category.key ? styles.active : ''}`}
              onClick={() => setActiveFilter(category.key)}
              style={{ fontFamily }}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project: any) => (
              <div key={project.id} className={styles.projectCard}>
                {/* Project Image */}
                <div className={styles.projectImageContainer}>
                  <div className={styles.projectImagePlaceholder}>
                    {project.category === (language === 'ar' ? 'سكني' : 'Residential') && '🏠'}
                    {project.category === (language === 'ar' ? 'تجاري' : 'Commercial') && '🏢'}
                    {project.category === (language === 'ar' ? 'ترميم' : 'Restoration') && '🏛️'}
                    {project.category === (language === 'ar' ? 'مؤسسي' : 'Institutional') && '🏥'}
                  </div>
                  <div className={styles.projectCategory} style={{ fontFamily }}>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle} style={{ fontFamily }}>
                      {project.title}
                    </h3>
                    
                    <div className={styles.projectMeta}>
                      <div className={styles.metaItem} style={{ fontFamily }}>
                        <span className={styles.metaIcon}>📍</span>
                        {project.location}
                      </div>
                      <div className={styles.metaItem} style={{ fontFamily }}>
                        <span className={styles.metaIcon}>📅</span>
                        {project.year}
                      </div>
                      <div className={styles.metaItem} style={{ fontFamily }}>
                        <span className={styles.metaIcon}>📐</span>
                        {project.area}
                      </div>
                    </div>
                  </div>

                  <p className={styles.projectIntroduction} style={{ fontFamily }}>
                    {project.introduction}
                  </p>

                  <p className={styles.projectDescription} style={{ fontFamily }}>
                    {project.description}
                  </p>

                  {/* Project Images Grid */}
                  <div className={styles.projectImages}>
                    {project.images.map((image: string, index: number) => (
                      <div key={index} className={styles.projectImageThumb}>
                        📷
                      </div>
                    ))}
                  </div>

                  <Link href={`/dev/gallery/${project.id}`}>
                    <button className={styles.viewProjectButton} style={{ fontFamily }}>
                      {language === 'ar' ? 'عرض التفاصيل الكاملة' : 'View Full Details'}
                    </button>
                  </Link>
                </div>
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
                {t.services.items.slice(0, 4).map((service: any, index: number) => (
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

