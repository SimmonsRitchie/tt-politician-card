import Vitals from "./vitals";
import ContactWeb from "./contact-web";
import ContactSocial from "./contact-social";
import Top from "./top";

const Profile = ({ data }) => {
  const {
    name,
    headshot: imgSrc,
    hometown,
    capitol_address: capAddress,
    facebook,
    twitter,
    capitol_email: capEmail,
    capitol_phone: capPhone,
    district_phone: distPhone,
    website_official: webOfficial,
    website_personal: webPersonal,
  } = data;
  const headshotAlt = `Headshot of ${name}`;
  return (
    <div className="flex flex-col w-full sm:w-80 gap-y-1 justify-center items-center py-11 px-11 rounded-sm text-gray-800 bg-gradient-to-b from-gray-50 to-gray-100 shadow">
      <Top
        imgSrc={imgSrc}
        headshotAlt={headshotAlt}
        name={name}
        hometown={hometown}
      />
      <ContactSocial
        capEmail={capEmail}
        facebook={facebook}
        twitter={twitter}
      />
      <Vitals capPhone={capPhone} distPhone={distPhone} capAddress={capAddress} />

      <ContactWeb webOfficial={webOfficial} webPersonal={webPersonal} />
    </div>
  );
};

export default Profile;