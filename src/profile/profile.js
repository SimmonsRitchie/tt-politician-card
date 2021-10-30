import ContactPhone from "./contact-phone";
import ContactWeb from "./contact-web";
import ContactSocial from "./contact-social";
import Top from "./top";

const Profile = ({ data }) => {
  const {
    name,
    headshot: imgSrc,
    hometown,
    capitol_email: capEmail,
    facebook,
    twitter,
    capitol_phone: capPhone,
    capitol_address: capAddress,
    district_phone: distPhone,
    website_official: webOfficial,
    website_personal: webPersonal,
  } = data;
  const headshotAlt = `Headshot of ${name}`;
  return (
    <div className="flex flex-col w-full sm:w-96 gap-y-1 justify-center items-center rounded-lg text-gray-800 bg-gradient-to-b from-gray-50 to-gray-100 shadow">
      <Top
        imgSrc={imgSrc}
        headshotAlt={headshotAlt}
        name={name}
        hometown={hometown}
      />
      <div className="pb-6 px-6 sm:pb-8 sm:px-8 w-full">
        <ContactSocial
          capEmail={capEmail}
          facebook={facebook}
          twitter={twitter}
        />
        <ContactPhone
          capPhone={capPhone}
          distPhone={distPhone}
          capAddress={capAddress}
        />
        <ContactWeb webOfficial={webOfficial} webPersonal={webPersonal} />
      </div>
    </div>
  );
};

export default Profile;
