import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <Navbar />
      <h1 className="text-center text-black font-bold text-2xl mt-8 pt-4">
        Welcome to InventoryInsight
      </h1>

      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              Find all what you need for your business here
            </h1>
            <p className="mt-4 text-gray-900 dark:text-gray-700">
              We have a wide variety of products for your business. From
              electronics to clothing, we have it all. We also offer a wide
              range of services to help you with your business needs.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Quality products</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">24/7 customer support</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Free returns</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Secure payments</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Wide variety of products</span>
              </div>

              <div className="flex items-center text-gray-800 -px-3 dark:text-gray-900">
                <svg
                  className="w-5 h-5 mx-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="mx-3">Fast shipping</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://www.hostgator.com/blog/wp-content/uploads/2019/01/Create-product-categories-for-your-online-store.png"
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
