export const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://linked.in/filipeklinger"
            target="_blank"
            rel="noopener noreferrer"
          >
            Filipe Klinger
          </a>
        </p>
      </div>
    </footer>
  );
};
