import PageBanner from "@components/PageBanner";
import AkpagerLayout from "@layouts/AkpagerLayout";

const Page = () => {
  return (
    <AkpagerLayout onePage>
      <PageBanner pageName={"ABN Registration Declaration"} />
      <div className="flex flex-col items-center justify-center py-40 bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-[1000px] p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div _ngcontent-c5="" className="privacy-policy-container">
            <p>
              Your Declaration And Important Information By submitting this
              form, I declare that Kwik Companies is authorised to submit an ABN
              application to the Australian Tax Office on my behalf and to do so
              as my registered tax agent, and if necessary, submit a Business
              Name application to the Australian Securities & Investments
              Commission (ASIC). I understand that Kwik Companies will utilise
              information supplied by me in this form to apply for an ABN, and
              if necessary, will remain my ASIC agent and notify me when my
              business name requires renewal. I confirm that I have received the
              consent of all individuals referred to in this application form,
              to the submission of their personal information contained in this
              form to Kwik Companies Pty Ltd and to the ATO and ASIC as
              necessary to process this application. I verify that the
              information supplied is, to the best of my knowledge, accurate and
              complete. I also confirm:
            </p>
            <ol>
              <li>
                I am not disqualified from managing corporations under Section
                206B(1) of the Corporations Act 2001.
              </li>
              <li>
                Within the last 5 years I have not been convicted of, or
                released from prison after being convicted of, and serving a
                term of imprisonment for, any of the criminal offences referred
                to in Section 32(1)(c) or (d) of the Business Names Registration
                Act 2011.
              </li>
              <li>
                This application is submitted under, and is compliant with, the
                terms and conditions of the ASIC Electronic Lodgement Protocol.
              </li>
              <li>
                The information supplied is, to the best of my knowledge,
                accurate and complete. I understand the best structure for my
                business (Sole Trader). I have the TFN, date of birth and name,
                OR name, address and date of birth for all key people in my
                business.
              </li>
              <li>
                I am not applying just because I have been asked to get an ABN
                as a condition of employment.
              </li>
              <li>
                I meet a number of the key characteristics of a business, or
                will once started, for example sourcing my own clients, I can
                delegate my work to others if I choose, I will invoice for my
                work and set my rate of pay, I will have a bank account for my
                business separate from my own bank account, I am responsible for
                my own public liability, professional indemnity and/or workers
                compensation/income protection insurance.
              </li>
              <li>
                I can provide evidence that I am entitled to an ABN if
                requested.
              </li>
              <li>
                To provide true and correct information in my ABN application.
                Penalties of up to $12,600 can apply for each false or
                misleading statement made in an ABN application.
              </li>
              <li>
                Once I have an ABN I must keep it up to date (within 28 days of
                any change) and cancel it once I am no longer trading or
                carrying on an enterprise.
              </li>
              <li>
                I understand I will be subscribed to receive free Monthly
                Business Updates to keep track of my registrations, including
                ABNs, business names, domain names and other registrations (and
                their renewal dates) and to receive marketing emails. I
                understand my personal information will be handled in accordance
                with the Privacy Policy and that I can unsubscribe from these
                emails at any time.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </AkpagerLayout>
  );
};

export default Page;
