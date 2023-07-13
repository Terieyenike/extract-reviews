const Footer = () => {
  return (
    <>
      <footer className='mt-auto'>
        <div className='mt-5 text-center text-gray-500'>
          <address>
            Built by
            <span className='text-blue-600'>
              <a href='https://twitter.com/terieyenike' target='_'>
                Teri
              </a>
            </span>
            &copy; 2023
          </address>
          <div>
            <p>
              Fork, clone, and star this
              <a
                href='https://github.com/Terieyenike/extract-reviews'
                target='_'
                rel='noopener noreferrer'
                className='text-blue-600'>
                <span> repo</span>
              </a>
            </p>
          </div>
          <p className='text-sm'>Bright Data ．GPT ．React ．Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
