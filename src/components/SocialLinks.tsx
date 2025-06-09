export function SocialLinks() {
  const links = [
    {
      title: "GitHub",
      emoji: "👨‍💻",
      href: "//github.com/snapsnapturtle/",
    },
    {
      title: "LinkedIn",
      emoji: "👔",
      href: "//www.linkedin.com/in/jonah-moeller",
    },
    {
      title: "CodeStats",
      emoji: "📈",
      href: "//codestats.net/users/snapsnapturtle",
    },
    {
      title: "Resume",
      emoji: "📝",
      href: "/resume_jonah.pdf",
    },
  ];

  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-8">
      {links.map((link) => (
        <div className="flex gap-2 items-center" key={link.href}>
          <span className="text-black text-sm">{link.emoji}</span>
          <a href={link.href} rel="noreferrer noopener" target="_blank">
            {link.title}
          </a>
        </div>
      ))}
    </div>
  );
}
