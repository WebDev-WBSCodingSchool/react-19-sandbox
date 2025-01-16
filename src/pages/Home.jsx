/**
 * Home represents the home page.
 *
 * @returns {JSX.Element} The rendered Home page.
 */
const Home = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold my-5'>React 19 Sandbox</h1>
      <p>
        This website and{' '}
        <a
          href='https://github.com/WebDev-WBSCodingSchool/react-19-sandbox'
          target='_blank'
          rel='noreferrer nooopener'
          className='text-primary hover:underline'
        >
          repo
        </a>{' '}
        hold a collection of common use cases and features in React, making use of the latest
        features and best practices.
      </p>
      <p>
        To use it, check of the repo&apos;s{' '}
        <a
          href='https://github.com/WebDev-WBSCodingSchool/react-19-sandbox?tab=readme-ov-file#react19-sandbox'
          target='_blank'
          rel='noreferrer nooopener'
          className='text-primary hover:underline'
        >
          README
        </a>{' '}
        for instructions on how to run the project and check the comments in the code for further
        explanation.
      </p>
      <p>
        <span role='img' aria-label='Point up'>
          ☝🏼
        </span>{' '}
        Click on the <span className='text-primary'>Menu</span> button on the top left to navigate
        through the different examples.
      </p>
    </div>
  );
};

export default Home;
