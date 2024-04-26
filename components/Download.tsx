import packageInfo from "./../package.json";
import Card from "./../components/Card";

const Download = () => {
  const { version } = packageInfo;
  const windowsNsisDownloadUrl = `https://github.com/lerte/ngroker-app/releases/download/v${version}/Ngroker_${version}_x64-setup.exe`;
  const windowsMsiDownloadUrl = `https://github.com/lerte/ngroker-app/releases/download/v${version}/Ngroker_${version}_x64_en-US.msi`;

  const macArmDownloadUrl = `https://github.com/lerte/ngroker-app/releases/download/v${version}/Ngroker_${version}_aarch64.dmg`;
  const macIntelDownloadUrl = `https://github.com/lerte/ngroker-app/releases/download/v${version}/Ngroker_${version}_x64.dmg`;

  const linuxAppImageDownloadUrl = `https://github.com/lerte/ngroker-app/releases/download/v${version}/ngroker_${version}_amd64.AppImage`;
  const linuxDebDownloadUrl = `https://github.com/lerte/ngroker-app/releases/download/v${version}/ngroker_${version}_amd64.deb`;

  return (
    <>
      <div className="mx-auto w-full max-w-[712px] text-center">
        <h1 className="t-48 text-white">Download</h1>
        <p className="t-b20 mt-2 opacity-70">
          Install the app and sign in to get started.
        </p>
      </div>
      <nav className="mt-6 flex grid-cols-3 flex-wrap gap-2 sm:grid md:mt-[64px] md:gap-5 xl:gap-[30px]">
        <Card
          title="macOS"
          icon={
            <svg
              className="fill-white"
              width="44"
              height="44"
              viewBox="0 0 52 52"
              fill="none"
            >
              <path
                d="M21.7588 27.4022C22.0336 22.6094 24.079 14.802 28.5236 6H6.00006C3.79092 6 2.00006 7.79086 2.00006 10V42C2.00006 44.2092 3.79092 46 6.00006 46H28.735C28.3672 43.6252 28.2408 41.2548 28.2502 39.0346C27.353 39.1516 26.4424 39.2148 25.5294 39.2148C22.3036 39.2148 19.106 38.427 16.4322 37.2544C13.7899 36.0954 11.5029 34.4902 10.2351 32.7296C9.76718 32.0798 9.91469 31.1736 10.5647 30.7056C11.2145 30.2378 12.1207 30.3852 12.5885 31.0352C13.4385 32.2156 15.2105 33.5518 17.5972 34.5986C19.9528 35.6318 22.7552 36.3148 25.5294 36.3148C26.4688 36.3148 27.4114 36.2364 28.339 36.0926C28.4724 33.65 28.7306 31.5148 28.9364 29.9336H24.1764C22.8458 29.9336 21.6766 28.8396 21.7588 27.4022ZM31.156 38.4622C32.3768 38.1404 33.5446 37.729 34.6266 37.2544C37.2692 36.0954 39.5562 34.4902 40.8238 32.7296C41.2918 32.0798 41.1442 31.1736 40.4944 30.7056C39.8444 30.2378 38.9382 30.3852 38.4704 31.0352C37.6204 32.2156 35.8486 33.5518 33.4618 34.5986C32.7714 34.9014 32.0426 35.174 31.2876 35.4082C31.4398 33.1888 31.688 31.2466 31.8794 29.7964C32.073 28.328 30.9296 27.0336 29.4554 27.0336H24.692C25.0766 22.4392 27.179 14.7405 31.7868 6H46C48.2092 6 50 7.79086 50 10V42C50 44.2092 48.2092 46 46 46H31.6716C31.2398 43.446 31.1176 40.8638 31.156 38.4622ZM15.0001 14.55C15.8009 14.55 16.4501 15.1992 16.4501 16V20.7059C16.4501 21.5067 15.8009 22.1558 15.0001 22.1558C14.1993 22.1558 13.5501 21.5067 13.5501 20.7059V16C13.5501 15.1992 14.1993 14.55 15.0001 14.55ZM38.45 16C38.45 15.1992 37.8008 14.55 37 14.55C36.1992 14.55 35.55 15.1992 35.55 16V20.7059C35.55 21.5067 36.1992 22.1558 37 22.1558C37.8008 22.1558 38.45 21.5067 38.45 20.7059V16Z"
                fill="currentColor"
              />
            </svg>
          }
        >
          <div className="flex gap-2">
            <a
              download
              href={macIntelDownloadUrl}
              className="rounded-md bg-stone-500 text-white p-2"
            >
              macOS Intel
            </a>
            <a
              download
              href={macArmDownloadUrl}
              className="rounded-md bg-stone-700 text-white p-2"
            >
              macOS Apple Silicon
            </a>
          </div>
        </Card>

        <Card
          title="Windows 7+"
          icon={
            <svg
              className="fill-white"
              fill="none"
              viewBox="0 0 46 46"
              height="46"
              width="46"
            >
              <path
                fill="currentColor"
                d="M0.296875 6.56799L18.9443 4.0173V21.9762H0.296875V6.56799ZM21.1903 3.66333L45.8969 0.0663452V21.8252H21.1903V3.66333ZM0.296875 23.8762H18.9443V41.8872L0.296875 39.2844V23.8762ZM21.1903 24.1157H45.8969V45.6663L21.1903 42.1787"
              />
            </svg>
          }
        >
          <div className="flex gap-2">
            <a
              download
              href={windowsMsiDownloadUrl}
              className="rounded-md bg-blue-500 text-white p-2"
            >
              Windows MSI
            </a>
            <a
              download
              href={windowsNsisDownloadUrl}
              className="rounded-md bg-blue-700 text-white p-2"
            >
              Windwos Nsis Setup
            </a>
          </div>
        </Card>
        <Card
          title="Linux"
          icon={
            <svg
              className="fill-white"
              fill="none"
              viewBox="0 0 55 40"
              height="40"
              width="55"
            >
              <path
                fill="currentColor"
                d="M0.613281 0.225403H54.3397V39.0278H0.613281V0.225403ZM8.36288 8.47665C8.75143 8.08811 9.38138 8.08811 9.76993 8.47665L14.7446 13.4513C15.1331 13.8399 15.1331 14.4698 14.7446 14.8584L9.76993 19.833C9.38138 20.2216 8.75143 20.2216 8.36288 19.833C7.97434 19.4445 7.97434 18.8145 8.36288 18.426L12.634 14.1548L8.36288 9.8837C7.97434 9.49515 7.97434 8.8652 8.36288 8.47665ZM16.534 22.1143C15.9845 22.1143 15.5391 22.5597 15.5391 23.1092C15.5391 23.6587 15.9845 24.1041 16.534 24.1041H25.4884C26.0379 24.1041 26.4833 23.6587 26.4833 23.1092C26.4833 22.5597 26.0379 22.1143 25.4884 22.1143H16.534Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          }
        >
          <div className="flex gap-2">
            <a
              download
              href={linuxAppImageDownloadUrl}
              className="rounded-md bg-green-500 text-white p-2"
            >
              Linux AppImage
            </a>
            <a
              download
              href={linuxDebDownloadUrl}
              className="rounded-md bg-green-700 text-white p-2"
            >
              mLinux Deb
            </a>
          </div>
        </Card>
      </nav>
    </>
  );
};

export default Download;
