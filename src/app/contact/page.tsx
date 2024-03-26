"use client";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { Fragment, Key } from "react";
import { useGetContacts } from "../queries/contacts";
import { Contact } from "../models/contacts";

export default function Home() {
  const uxSkeletonArray: number[] = Array(9).fill(0);
  const { data: contacts, totalRecords } = useGetContacts();
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="h-dvh w-full lg:pr-[24rem] pt-24 px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {totalRecords
            ? contacts.map((contact: Contact, index: Key) => (
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
    </div>
  );
}
