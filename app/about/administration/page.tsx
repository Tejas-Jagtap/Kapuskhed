"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaUserTie,
  FaUsers,
  FaClipboardList,
  FaBalanceScale,
  FaPhoneAlt,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

export default function AdministrationPage() {
  const { t, language } = useLanguage();

  const electedMembers = [
    // Head Officials
    {
      id: 1,
      MarathiName: "श्री. निवृत्ती शंकर माळी",
      EnglishName: "Mr. Nivrutti Shankar Mali",
      positionKey: "Sarpanch / सरपंच",
      image: "/images/sarpanch.jpg",
      phone: "+91-9860379356",
      phoneDevnagari: "+९१-९८६०३७९३५६",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 2,
      MarathiName: "श्री. कृष्णा सदाशिव पाटील",
      EnglishName: "Mr. Krishna Sadashiv Patil",
      positionKey: "Upa-Sarpanch / उप-सरपंच",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-7798052064",
      phoneDevnagari: "+९१-७७९८०५२०६४",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 3,
      MarathiName: "श्री. सुरज विठ्ठल फार्णे",
      EnglishName: "Mr. Suraj Vitthal Pharane",
      positionKey: "Gram Sevak / ग्रामसेवक",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9422520714",
      phoneDevnagari: "+९१-९४२२५२०७१४",
      email: "kapuskhedgp7@gmail.com",
    },

    // Ward Members
    {
      id: 4,
      MarathiName: "युवराज भीमराव पाटील",
      EnglishName: "Yuvraj Bhimrao Patil",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9403645830",
      phoneDevnagari: "+९१-९४०३६४५८३०",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 5,
      MarathiName: "राजेंद्र परशुराम पाटील",
      EnglishName: "Rajendra Parshuram Patil",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9422763765",
      phoneDevnagari: "+९१-९४२२७६३७६५",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 6,
      MarathiName: "गजानन दत्तात्रय माळी",
      EnglishName: "Gajanan Dattatray Mali",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-7821088211",
      phoneDevnagari: "+९१-७८२१०८८२११",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 7,
      MarathiName: "संतोष नारायण पाटील",
      EnglishName: "Santosh Narayan Patil",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9970205894",
      phoneDevnagari: "+९१-९९७०२०५८९४",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 8,
      MarathiName: "जयदीप देवानंद पाटील",
      EnglishName: "Jaydeep Devanand Patil",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9545603030",
      phoneDevnagari: "+९१-९५४५६०३०३०",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 9,
      MarathiName: "सारिका रामचंद्र ढमाले",
      EnglishName: "Sarika Ramchandra Dhamale",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9981507570",
      phoneDevnagari: "+९१-९९८१५०७५७०",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 10,
      MarathiName: "कल्पना विठ्ठल पाटील",
      EnglishName: "Kalpana Vitthal Patil",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-8975514004",
      phoneDevnagari: "+९१-८९७५५१४००४",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 11,
      MarathiName: "पूनम शांताराम धुमाळे",
      EnglishName: "Poonam Shantaram Dhumale",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9834722370",
      phoneDevnagari: "+९१-९८३४७२२३७०",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 12,
      MarathiName: "संगीता श्रीकांत पाटील",
      EnglishName: "Sangeeta Shrikant Patil",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9561416361",
      phoneDevnagari: "+९१-९५६१४१६३६१",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 13,
      MarathiName: "वैशाली माणिकराव मोकाशी",
      EnglishName: "Vaishali Manikrao Mokashi",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9822101343",
      phoneDevnagari: "+९१-९८२२१०१३४३",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 14,
      MarathiName: "रेश्मा साजिद मुल्ला",
      EnglishName: "Reshma Sajid Mulla",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-9403627020",
      phoneDevnagari: "+९१-९४०३६२७०२०",
      email: "kapuskhedgp7@gmail.com",
    },
    {
      id: 15,
      MarathiName: "नितादेवी भगवान पाटील",
      EnglishName: "Nitadevi Bhagwan Patil",
      positionKey: "सदस्य / Member",
      image: "/images/Seal_of_Maharashtra.svg.png",
      phone: "+91-8275915546",
      phoneDevnagari: "+९१-८२७५९१५५४६",
      email: "kapuskhedgp7@gmail.com",
    },
  ];

  // const administrativeStaff = [
  // ];

  const committees = [
    {
      nameKey: "admin.standingCommittee",
      icon: FaClipboardList,
      members: 5,
      responsibilityKey: "admin.standingResp",
    },
    {
      nameKey: "admin.financeCommittee",
      icon: FaBalanceScale,
      members: 4,
      responsibilityKey: "admin.financeResp",
    },
    {
      nameKey: "admin.developmentCommittee",
      icon: FaUsers,
      members: 6,
      responsibilityKey: "admin.developmentResp",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.administration")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("admin.subtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaUserTie className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("admin.aboutAdministration")}
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {t("admin.adminText1")}
          </p>
        </section>

        {/* Elected Members */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.electedReps")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electedMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-government-blue to-government-green p-4 text-white text-center">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src={member.image}
                      alt={"member.name"}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <FaUserCircle />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {member.positionKey}
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-government-blue mb-2">
                    {language === "mr"
                      ? member.MarathiName
                      : member.EnglishName}
                  </h4>
                  {/* <p className="text-gray-600 text-sm mb-4">{member.ward}</p> */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaPhoneAlt className="text-government-orange" />
                      <span>
                        {language === "en"
                          ? member.phone
                          : member.phoneDevnagari}
                      </span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-sm text-gray-700"> */}
                    {/* <FaEnvelope className="text-government-orange" /> */}
                    {/* <span className="break-all">{member.email}</span> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Staff */}
        {/* <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.adminStaff")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {administrativeStaff.map((staff, index) => (
              <div
                key={index}
                className="border-l-4 border-government-orange pl-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2">
                  {language === "en" ? staff.EnglishName : staff.MarathiName}
                </h3>
                <p className="text-government-orange font-semibold mb-1">
                  {staff.position}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {t(`${staff.position}`)}
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaPhoneAlt className="text-government-orange text-xs" />
                    <span>
                      {language === "en" ? staff.phone : staff.phoneDevnagari}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    {/* <FaEnvelope className="text-government-orange text-xs" /> */}
        {/* <span className="break-all">{staff.email}</span> */}
        {/* </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Committees */}
        {/* <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.panchayatCommittees")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committees.map((committee, index) => {
              const Icon = committee.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="text-4xl text-government-orange mb-4" />
                  <h3 className="text-xl font-bold text-government-blue mb-3">
                    {t(committee.nameKey)}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.members")}:
                      </span>{" "}
                      {committee.members}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.responsibility")}:
                      </span>
                      <br />
                      {t(committee.responsibilityKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* Governance Structure */}
        {/* <section className="bg-[#4A7FA7] text-white rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("admin.governanceStructure")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("admin.electedBody")}
              </h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>
                  • {t("admin.sarpanch")} - {t("admin.electedHead")}
                </li>
                <li>
                  • {t("admin.upSarpanch")} - {t("admin.deputyHead")}
                </li>
                <li>
                  • {t("admin.wardMember")} - {t("admin.wardMembers16")}
                </li>
                <li>
                  • {t("admin.standingCommittee")} -{" "}
                  {t("admin.standingCommitteeMembers")}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t("admin.functions")}</h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• {t("admin.function1")}</li>
                <li>• {t("admin.function2")}</li>
                <li>• {t("admin.function3")}</li>
                <li>• {t("admin.function4")}</li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
