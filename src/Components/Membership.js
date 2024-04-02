import React from "react";

const Membership = () => {
  return (
    <div>
      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl sm:text-center">
            <h2 class="text-3xl font-bold tracking-tight text-red-600 sm:text-4xl">
              Choose the right plan for you
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Watch all that you want. Recommendations just for you. Change or
              Cancel your plan anytime
            </p>
          </div>
          {/* single membership info start - Basic*/}
          <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div class="p-8 sm:p-10 lg:flex-auto">
              <h3 class="text-2xl font-bold tracking-tight text-gray-900">
                Basic Plan
              </h3>
              <p class="mt-6 text-base leading-7 text-gray-600">
                Basic subscribers have access to the same material as those on a
                Premium monthly plan. Differences come in the form of resolution
                — the Standard with ads and the Standard plan now stream at Full
                HD (1080p). The Basic plan (for those who keep it) streams in
                just HD (720p) resolution. Stream on a single mobile, tablet,
                computer, or smart TV device in High definition (HD) 720p
                quality.
              </p>
              <div class="mt-10 flex items-center gap-x-4">
                <h4 class="flex-none text-sm font-semibold leading-6 text-red-600">
                  What’s included
                </h4>
                <div class="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Private forum access
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Member resources
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Good Resolution
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Official member Tag
                </li>
              </ul>
            </div>
            <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div class="mx-auto max-w-xs px-8">
                  <p class="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                    <span class="text-5xl font-bold tracking-tight text-gray-900">
                      $199
                    </span>
                    <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a
                    href="#"
                    class="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p class="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* single mem info end - Basic */}

          {/* single membership info start - Premium*/}
          <div class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div class="p-8 sm:p-10 lg:flex-auto">
              <h3 class="text-2xl font-bold tracking-tight text-gray-900">
                Premium Plan
              </h3>
              <p class="mt-6 text-base leading-7 text-gray-600">
                Premium subscribers have unlimited ad-free viewing and can use
                up to four devices simultaneously, with the capability to
                download content onto six devices. Enhanced viewing features,
                like Ultra HD and Netflix spatial audio, set Premium
                subscriptions apart from the other options. Watch on 4 supported
                devices at a time. Option to add up to 2 extra members who don't
                live with you.
              </p>
              <div class="mt-10 flex items-center gap-x-4">
                <h4 class="flex-none text-sm font-semibold leading-6 text-red-600">
                  What’s included
                </h4>
                <div class="h-px flex-auto bg-gray-100"></div>
              </div>
              <ul
                role="list"
                class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Unlimited ad-free movies, TV shows, and mobile games.
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Download on 6 supported devices at a time.
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Netflix spatial audio
                </li>
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Watch in Ultra HD.
                </li>
              </ul>
            </div>
            <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div class="mx-auto max-w-xs px-8">
                  <p class="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p class="mt-6 flex items-baseline justify-center gap-x-2">
                    <span class="text-5xl font-bold tracking-tight text-gray-900">
                      $399
                    </span>
                    <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a
                    href="#"
                    class="mt-10 block w-full rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p class="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* single mem info end - Premium */}
        </div>
      </div>
    </div>
  );
};

export default Membership;
