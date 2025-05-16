export default function Footer() {
  return (
    <footer className="py-8">
      <p className="text-center text-sm font-semibold text-neutral-400">
        Crafted by Priyank Rajai &copy; {new Date().getFullYear()}
      </p>
      <div className="flex justify-center mt-2">
        <iframe
          src="https://status.priyankrajai.com/badge?theme=dark"
          width="185"
          height="30"
          frameBorder="0"
          scrolling="no"
          style={{ colorScheme: "normal" }}
        ></iframe>
      </div>
    </footer>
  );
}
