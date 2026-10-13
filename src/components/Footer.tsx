const links = [
  "FAQ", "Help Centre", "Account", "Media Centre",
  "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use",
  "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us",
];

export default function Footer() {
  return (
    <footer className="pb-12 text-xs text-gray-400">
      <p className="mb-4 underline">Questions? Contact us.</p>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="underline hover:text-white">{l}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
}