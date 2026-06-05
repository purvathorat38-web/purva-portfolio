import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';

const Certifications = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  const certificates = [
    {
      id: 'techkriti-innovation',
      emoji: '💡',
      title: 'Techkriti Innovation Challenge',
      issuer: 'IIT KANPUR — Techkriti\'26 Festival',
      date: 'March 19-22, 2026',
      credentialUrl: null,
      pdfUrl: '/cert-techkriti-innovation.pdf',
    },
    {
      id: 'pitch-premier',
      emoji: '🎤',
      title: 'Pitch Premier',
      issuer: 'IIT KANPUR — Techkriti\'26 Festival',
      date: 'March 19-22, 2026',
      credentialUrl: null,
      pdfUrl: '/cert-pitch-premier.pdf',
    },
    {
      id: 'nodejs',
      emoji: '🟢',
      title: 'Master Node.js: From Beginner to Full-Stack Developer',
      issuer: 'Udemy — Brighter Futures Hub',
      date: 'Feb 2, 2026',
      credentialUrl: 'https://ude.my/UC-e8adad3d-cffc-4c52-884a-1e2b87c3c0ea',
      pdfUrl: '/cert-nodejs.pdf',
    },
    {
      id: 'cyber-forensics',
      emoji: '🔍',
      title: 'Cyber Forensics For Beginners',
      issuer: 'Udemy — Sean Tafadzwa Mushaya',
      date: 'Feb 2, 2026',
      credentialUrl: 'https://ude.my/UC-a7642bb3-3159-42b0-b624-562254e7a5d0',
      pdfUrl: '/cert-cyber-forensics.pdf',
    },
    {
      id: 'code-the-bot',
      emoji: '🤖',
      title: 'Code the Bot — Robotics Workshop',
      issuer: 'Genesis Club, Vishwakarma University Student Council',
      date: 'October 6, 2025',
      credentialUrl: null,
      pdfUrl: '/cert-code-the-bot.pdf',
    },
  ];

  return (
    <section id="certifications" className="py-8 sm:py-12 md:py-16 relative" style={{
      background: themeColors.background.sections?.certifications || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>
          Certifications
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-3 sm:gap-4 md:gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row items-start sm:items-start gap-3 sm:gap-5 p-4 sm:p-5 rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg"
              style={{
                background: isDarkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.8)',
                border: isDarkMode ? '1px solid rgba(251,191,212,0.15)' : '1px solid #fbbfd4',
              }}
            >
              {/* Emoji icon */}
              <div
                className="flex items-center justify-center rounded-lg sm:rounded-xl text-2xl sm:text-3xl flex-shrink-0"
                style={{
                  width: '56px',
                  height: '56px',
                  minWidth: '56px',
                  background: isDarkMode ? 'rgba(251,191,212,0.1)' : 'rgba(236,72,153,0.08)',
                  border: isDarkMode ? '1px solid rgba(251,191,212,0.2)' : '1px solid rgba(236,72,153,0.15)',
                }}
              >
                {cert.emoji}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1 flex-1 w-full">
                <h3
                  className="text-sm sm:text-base font-semibold"
                  style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}
                >
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                  {cert.issuer}
                </p>
                <p className="text-xs" style={{ color: isDarkMode ? themeColors.colors.dark[400] : themeColors.colors.dark[500] }}>
                  {cert.date}
                </p>

                {/* Action links */}
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
                  {/* Open PDF */}
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs inline-flex items-center gap-1 transition-opacity hover:opacity-70"
                    style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}
                    aria-label={`View ${cert.title} certificate PDF`}
                  >
                    📄 View Certificate
                  </a>
                  {/* Verify online */}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs inline-flex items-center gap-1 transition-opacity hover:opacity-70"
                      style={{ color: isDarkMode ? themeColors.colors.dark[400] : themeColors.colors.dark[500] }}
                      aria-label={`Verify ${cert.title} credential online`}
                    >
                      🔗 Verify online
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
          zIndex: 1
        }}
      />
    </section>
  );
};

export default Certifications;
