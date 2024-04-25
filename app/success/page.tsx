import PageBanner from "@components/PageBanner";
import AkpagerLayout from "@layouts/AkpagerLayout";
import { Urls } from "app/types/urls";
import Link from "next/link";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Success() {
  return (
    <AkpagerLayout onePage>
      <PageBanner pageName={"Success"} />
      <div className="flex flex-col items-center justify-center py-40 bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center space-y-4">
            <IoMdCheckmarkCircleOutline className="w-16 h-16 text-green-500" />
            <h1 className="text-2xl font-bold">Order Confirmed</h1>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Your ABN Registration order has been confirmed, we will be in
              touch with you shortly!
            </p>
            <Link
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={Urls.Home}
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </AkpagerLayout>
  );
}
