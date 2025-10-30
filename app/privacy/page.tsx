"use client";

import HeaderText from "@/components/common/HeaderText";
import AutoBreadcrumb from "@/components/common/AutoBreadcrumb";

const PrivacyPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <AutoBreadcrumb className="mb-6" />
            <HeaderText heading="Privacy & Security" textalign="text-left" />

            <div className="mt-8 space-y-8">
                <p className="text-[15px] mb-2">Pouring Pounds Limited and/ or Pouring Pounds India Private Limited (as the case may be) ( We”, “Our”, “CashKaro” or “Us”, where such expression shall unless repugnant to the context thereof, be deemed to include its respective legal heirs, representatives, administrators, permitted successors and assigns) own and/ or operate the website and mobile application CashKaro.com (“Website”, “Our Website”, “Site”).</p>
                <p className="text-[15px] mb-2">For the purpose of providing the Services (as defined in clause 1 below), CashKaro is required to collect and use certain information of the users of the Website (“Users”) using the Services and involves capturing, storage and transmission of such information. This privacy policy (&quot;Privacy Policy&quot;/ &quot;Policy&quot;) explains how We collect, use, share and protect personal information of the Users of the Services (jointly and severally referred to as &quot;You&quot;, &quot;Your&quot;, &quot;Yourself&quot; or &quot;User&quot; or &quot;Users&quot; in this Privacy Policy). We have created this Privacy Policy to ensure our steady commitment to the privacy of the information of the Users who interact with our Services. Your use of and access to the Services is subject to this Privacy Policy and our Terms and Conditions. Any capitalized term used, but not defined, in this Privacy Policy shall have the meaning attributed to it in our Terms and Conditions.</p>
                <p className="text-[15px] mb-2">The headings used herein are only for the purpose of arranging the various provisions of the Privacy Policy. The headings are for the purpose of reference only and shall not be interpreted to limit or expand the provisions of the clauses contained therein.</p>
                <h2 className="text-[18px] font-bold text-gray-900 capitalize mb-2">1. Definitions</h2>
                <p className="text-[15px] mb-2">In this Privacy Policy, unless the context otherwise requires, the terms defined shall bear the meanings assigned to them below, and their cognate expressions shall be construed accordingly.</p>
                <p className="text-[15px] mb-2">“Personal Information” shall have the same meaning as given in Rule 2(1)(i) of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 to mean any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available to a body corporate, is capable of identifying such person. The SPI Rules further define “Sensitive Personal Data or Information” of a person to</p>
            </div>
        </div>
    );
};

export default PrivacyPage;