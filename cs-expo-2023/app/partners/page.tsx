import React, { PropsWithoutRef } from 'react'
import {NextPage} from "next";
import PartnersItemLayout from "../../components/PartnersItemLayout";

const partners = ["/kekw-kek.gif", "/kekl.jpg", "/kekw.jpg"];

const Partners:NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {
          partners.map((item,index) => (<PartnersItemLayout {...{src:item}}/>))
        }
      </div>
    </main>
  )
}

export default Partners
