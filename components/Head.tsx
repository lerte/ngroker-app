const Head = () => {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="/icon.ico"
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YDD0SSFPEH"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-YDD0SSFPEH');
      </script>      
    </>
  );
};

export default Head;
