"use client";

import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { Fragment, Key, useEffect, useState } from "react";
import { useGetContacts } from "../queries/contacts";
import { Contact } from "../models/contacts";
import Link from "next/link";
import FilterInput from "./components/FilterInput";

export default function Home() {
  const uxSkeletonArray: number[] = Array(9).fill(0);
  const { data: contacts } = useGetContacts();
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  useEffect(() => {
    setFilteredContacts(contacts);
  }, [contacts]);
  return (
    <>
      <Sidebar contacts={contacts} setFilteredContacts={setFilteredContacts} />
      <div className="w-full lg:pr-[24rem] pt-24 px-4">
        <div className="flex flex-col justify-center items-center gap-2 lg:hidden">
          <Link
            className="py-3 px-4 bg-Green font-semibold rounded-xl flex place-items-center sm:hidden hover:bg-green-500"
            href="/contact/add"
          >
            مخاطب جدید
          </Link>
          <div className="py-3 w-full">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <p className="text-xl text-white">فیلترها</p>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="grid grid-cols-1 md:grid-cols-3 border border-CurrentLine p-5 rounded-xl mt-3 gap-3">
                <FilterInput
                  id="nameFilter"
                  placeholder="جستجوی نام"
                  contacts={contacts}
                  setFilteredContacts={setFilteredContacts}
                />
                <FilterInput
                  id="lastNameFilter"
                  placeholder="جستجوی نام خانوادگی"
                  contacts={contacts}
                  setFilteredContacts={setFilteredContacts}
                />
                <FilterInput
                  id="phoneNumberFilter"
                  placeholder="جستجوی شماره تلفن"
                  contacts={contacts}
                  setFilteredContacts={setFilteredContacts}
                />
              </div>
            </details>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-4 lg:pt-0 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredContacts
            ? filteredContacts?.map((contact: Contact, index: Key) => (
                <Fragment key={index}>
                  <Card contact={contact} />
                </Fragment>
              ))
            : uxSkeletonArray.map((skeleton, index: Key) => (
                <Fragment key={index}>
                  <div className="border border-CurrentLine shadow rounded-xl p-4 w-full">
                    <div className="animate-pulse gap-7 grid grid-cols-4">
                      <div className="col-span-3 gap-1 space-y-6">
                        <div className="h-5 bg-slate-700 rounded"></div>
                        <div className="h-5 bg-slate-700 rounded"></div>
                        <div className="h-5 bg-slate-700 rounded"></div>
                        <div className="h-5 bg-slate-700 rounded"></div>
                      </div>
                      <div className="col-span-1 self-center justify-self-center align-self">
                        <div className="rounded-full bg-slate-700 h-20 w-20"></div>
                      </div>
                    </div>
                    <div className="animate-pulse flex mt-4 gap-1 justify-center">
                      <div className="h-12 w-[4.5rem] bg-slate-700 rounded-xl"></div>
                      <div className="h-12 w-[4.5rem] bg-slate-700 rounded-xl"></div>
                      <div className="h-12 w-[4.5rem] bg-slate-700 rounded-xl"></div>
                    </div>
                  </div>
                </Fragment>
              ))}
        </div>
      </div>
    </>
  );
}
