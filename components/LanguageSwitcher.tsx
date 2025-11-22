'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.switcher}>
        <button
          onClick={() => setLanguage('ar')}
          className={`${styles.button} ${styles.buttonArabic} ${language === 'ar' ? styles.active : styles.inactive}`}
        >
          العربية
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`${styles.button} ${styles.buttonEnglish} ${language === 'en' ? styles.active : styles.inactive}`}
        >
          English
        </button>
      </div>
    </div>
  );
}

