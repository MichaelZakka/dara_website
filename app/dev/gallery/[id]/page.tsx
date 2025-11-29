'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './page.module.css';

export default function ProjectDetailPage() {
  const { t, dir, language } = useLanguage();
  const fontFamily = dir === 'rtl' ? 'var(--font-cairo)' : 'var(--font-montserrat)';
  const params = useParams();
  const projectId = parseInt(params.id as string);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the current project
  const project = t.gallery.projects.find((p: any) => p.id === projectId);

  if (!project) {
    return (
      <div className={styles.projectDetailPage} style={{ direction: dir, fontFamily }}>
        <div style={{ padding: '10rem 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', color: 'var(--navy-blue)' }}>
            {language === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}
          </h1>
          <Link href="/dev/gallery" style={{ color: 'var(--royal-blue)', marginTop: '1rem', display: 'inline-block' }}>
            {language === 'ar' ? 'العودة إلى المعرض' : 'Back to Gallery'}
          </Link>
        </div>
      </div>
    );
  }

  // Get related projects (exclude current project)
  const relatedProjects = t.gallery.projects
    .filter((p: any) => p.id !== projectId && p.category === project.category)
    .slice(0, 3);

  // Project icon based on category
  const getProjectIcon = (category: string) => {
    if (category === (language === 'ar' ? 'سكني' : 'Residential')) return '🏠';
    if (category === (language === 'ar' ? 'تجاري' : 'Commercial')) return '🏢';
    if (category === (language === 'ar' ? 'ترميم' : 'Restoration')) return '🏛️';
    if (category === (language === 'ar' ? 'مؤسسي' : 'Institutional')) return '🏥';
    return '🏗️';
  };

  // Project highlights
  const highlights = [
    { icon: '✓', text: language === 'ar' ? 'تصميم معماري احترافي' : 'Professional Architectural Design' },
    { icon: '✓', text: language === 'ar' ? 'تنفيذ عالي الجودة' : 'High-Quality Execution' },
    { icon: '✓', text: language === 'ar' ? 'استخدام أحدث التقنيات' : 'Latest Technology Integration' },
    { icon: '✓', text: language === 'ar' ? 'التسليم في الوقت المحدد' : 'On-Time Delivery' }
  ];

  // Lightbox handlers
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <div className={styles.projectDetailPage} style={{ direction: dir, fontFamily }}>
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
        
        <div className={styles.heroImageContainer}>
          <div className={styles.heroImagePlaceholder}>
            {getProjectIcon(project.category)}
          </div>
        </div>

        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <span className={styles.categoryBadge} style={{ fontFamily }}>
            {project.category}
          </span>
          <h1 className={styles.heroTitle} style={{ fontFamily }}>
            {project.title}
          </h1>
          
          <div className={styles.heroMeta}>
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
      </section>

      {/* Main Content */}
      <section className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {/* Back Navigation */}
          <div className={styles.backNav}>
            <Link href="/dev/gallery" className={styles.backButton} style={{ fontFamily }}>
              <span>{language === 'ar' ? '→' : '←'}</span>
              {language === 'ar' ? 'العودة إلى المعرض' : 'Back to Gallery'}
            </Link>
          </div>

          {/* Introduction Section */}
          <div className={styles.introSection}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {language === 'ar' ? 'نظرة عامة على المشروع' : 'Project Overview'}
            </h2>
            <p className={styles.introText} style={{ fontFamily }}>
              {project.introduction}
            </p>
          </div>

          {/* Description Section */}
          <div className={styles.descriptionSection}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {language === 'ar' ? 'تفاصيل المشروع' : 'Project Description'}
            </h2>
            <p className={styles.descriptionText} style={{ fontFamily }}>
              {project.description}
            </p>
          </div>

          {/* Image Gallery */}
          <div className={styles.gallerySection}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {language === 'ar' ? 'معرض الصور' : 'Image Gallery'}
            </h2>
            <div className={styles.imageGrid}>
              <div 
                className={`${styles.galleryImage} ${styles.imageGridLarge}`}
                onClick={() => openLightbox(0)}
                role="button"
                tabIndex={0}
              >
                📷
              </div>
              {project.images.slice(1).map((_: any, index: number) => (
                <div 
                  key={index} 
                  className={styles.galleryImage}
                  onClick={() => openLightbox(index + 1)}
                  role="button"
                  tabIndex={0}
                >
                  📷
                </div>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className={styles.detailsSection}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {language === 'ar' ? 'معلومات المشروع' : 'Project Information'}
            </h2>
            <div className={styles.detailsGrid}>
              <div className={styles.detailCard}>
                <div className={styles.detailLabel} style={{ fontFamily }}>
                  {language === 'ar' ? 'الموقع' : 'Location'}
                </div>
                <div className={styles.detailValue} style={{ fontFamily }}>
                  {project.location}
                </div>
              </div>
              <div className={styles.detailCard}>
                <div className={styles.detailLabel} style={{ fontFamily }}>
                  {language === 'ar' ? 'سنة الإنجاز' : 'Year Completed'}
                </div>
                <div className={styles.detailValue} style={{ fontFamily }}>
                  {project.year}
                </div>
              </div>
              <div className={styles.detailCard}>
                <div className={styles.detailLabel} style={{ fontFamily }}>
                  {language === 'ar' ? 'المساحة' : 'Total Area'}
                </div>
                <div className={styles.detailValue} style={{ fontFamily }}>
                  {project.area}
                </div>
              </div>
              <div className={styles.detailCard}>
                <div className={styles.detailLabel} style={{ fontFamily }}>
                  {language === 'ar' ? 'التصنيف' : 'Category'}
                </div>
                <div className={styles.detailValue} style={{ fontFamily }}>
                  {project.category}
                </div>
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className={styles.highlightsSection}>
            <h2 className={styles.sectionTitle} style={{ fontFamily }}>
              {language === 'ar' ? 'النقاط البارزة' : 'Project Highlights'}
            </h2>
            <div className={styles.highlightsList}>
              {highlights.map((highlight, index) => (
                <div key={index} className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>{highlight.icon}</div>
                  <div className={styles.highlightText} style={{ fontFamily }}>
                    {highlight.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={styles.relatedContainer}>
            <h2 className={styles.relatedTitle} style={{ fontFamily }}>
              {language === 'ar' ? 'مشاريع ذات صلة' : 'Related Projects'}
            </h2>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((relProject: any) => (
                <Link key={relProject.id} href={`/dev/gallery/${relProject.id}`} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    {getProjectIcon(relProject.category)}
                  </div>
                  <div className={styles.relatedContent}>
                    <div className={styles.relatedCategory} style={{ fontFamily }}>
                      {relProject.category}
                    </div>
                    <h3 className={styles.relatedCardTitle} style={{ fontFamily }}>
                      {relProject.title}
                    </h3>
                    <p className={styles.relatedDescription} style={{ fontFamily }}>
                      {relProject.introduction.substring(0, 100)}...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className={styles.lightbox}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Close"
          >
            ✕
          </button>

          <button 
            className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous"
          >
            {dir === 'rtl' ? '→' : '←'}
          </button>

          <div 
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.lightboxImageContainer}>
              <div className={styles.lightboxImagePlaceholder}>
                📷
              </div>
            </div>
            <div className={styles.lightboxInfo} style={{ fontFamily }}>
              <p className={styles.lightboxTitle} style={{ fontFamily }}>
                {project.title}
              </p>
              <p className={styles.lightboxCounter} style={{ fontFamily }}>
                {currentImageIndex + 1} / {project.images.length}
              </p>
            </div>
          </div>

          <button 
            className={`${styles.lightboxNav} ${styles.lightboxNext}`}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next"
          >
            {dir === 'rtl' ? '←' : '→'}
          </button>

          <div className={styles.lightboxThumbnails}>
            {project.images.map((_: any, index: number) => (
              <div
                key={index}
                className={`${styles.lightboxThumbnail} ${index === currentImageIndex ? styles.lightboxThumbnailActive : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              >
                📷
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

