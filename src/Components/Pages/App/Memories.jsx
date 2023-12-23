const memoriesArray = [
  {
    location: "Gulshan 1 Dhaka.",
    memoryName: "Apex Diary",
    visitedDate: "May 11, 2023",
    imageURL:
      "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/346274959_929095865026398_2424434093932763369_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeGNFuq3BFBXx-OlMe5HH7scw5Q3xbJUWPDDlDfFslRY8PTwIhNBUrwOlAVeDH-9Y4UMDtFa1GzIea6F9SSCDEt3&_nc_ohc=XBRV9fKPubMAX8aklAB&_nc_ht=scontent.fdac151-1.fna&oh=00_AfDmPuOvi-3SYKtp2kNbOUIO54duC_QQO7dHgaPYP6R3FQ&oe=658B6928",
    hashtags: ["#Apex Diary", "#Apex Diary", "#Apex Diary"],
    description:
      "Apex Bangladesh: Innovators in apparel, textiles, and real estate, leading with excellence and ethical practices.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "Apex Diary",
    visitedDate: "December 13, 2023",
    imageURL:
      "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/410336478_7026174924131064_4082102898658490442_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeHn_nh1UMOehecuf_aEcEbJUIYgOm-CBqJQhiA6b4IGotMp2MWdnadC7yfIvO58HpBewLzHFhDsbESQMt-NiRcY&_nc_ohc=0oqB6Q_qWxsAX9oYII5&_nc_ht=scontent.fdac151-1.fna&oh=00_AfDoNM2N0wCSvmKiWGQObMTBaAb4au2-dorsGlDbsQ8-UQ&oe=658C9568",
    hashtags: ["#Apex Diary", "#Apex Diary", "#Apex Diary"],
    description:
      "Apex Bangladesh: Innovators in apparel, textiles, and real estate, leading with excellence and ethical practices.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "Apex Diary",
    visitedDate: "December 13, 2023",
    imageURL:
      "https://scontent.fdac151-1.fna.fbcdn.net/v/t39.30808-6/410330060_7026176514130905_212419449180896700_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFZFn0S8xmYz4fPVfEVUnfIOJ1rTqYxwkM4nWtOpjHCQ2QjZfynlCwviXuEYaEfkbLS12MQTrf3pxJrj_Zp1MSi&_nc_ohc=AvIpRbjqtRIAX8-5T8J&_nc_ht=scontent.fdac151-1.fna&oh=00_AfB3NXSCaq0725MYPKBqZkzJlflsd0nZxOZbyB-dgjLSXg&oe=658B297B",
    hashtags: ["#Apex Diary", "#Apex Diary", "#Apex Diary"],
    description:
      "Apex Bangladesh: Innovators in apparel, textiles, and real estate, leading with excellence and ethical practices.",
  },
  {
    location: "Gazipur, Dhaka",
    memoryName: "OPPO",
    visitedDate: "March 8, 2021",
    imageURL: "https://scontent.fdac151-1.fna.fbcdn.net/v/t1.6435-9/158988020_3830454930369762_762609644907845830_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeFTe2xm2M7VFWUaPgCxY_n04fGGymMb-OTh8YbKYxv45EIYq10CahIQELroDehkAjVVZd0oDtRFCMeO4E-XBVaN&_nc_ohc=CcOXCQzhna8AX-gdOI8&_nc_ht=scontent.fdac151-1.fna&oh=00_AfD2gGlxFT4pEyr0I8kpmERyxrQptTQVIIPd-zI7DPo3CA&oe=65AE4422",
    hashtags: ["#OPPO", "#OPPO", "#OPPO"],
    description:
      "Oppo Mobile Bangladesh: Redefining smartphone experiences with cutting-edge innovation and style.",
  },
  {
    location: "Dhaka, Bangladesh",
    memoryName: "OPPO",
    visitedDate: "March 8, 2023",
    imageURL: "https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/277585434_5051690341579542_7232421398629673041_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFvyFrGqZxuUqbmzpf_Yd2f3anyex1IdfbdqfJ7HUh19kuyNd06t_ELKhMOn44fVWluWsmyCcAXtPJEOOxPSlfV&_nc_ohc=ZpSW1Vka2MAAX8YjdnM&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AfBLGOXbXHLD8f-4iHk5HmaqkvPMuKa7oTIl7jFFp_Cb9w&oe=658B2353",
    hashtags: ["#OPPO", "#OPPO", "#OPPO"],
    description:
      "Oppo Mobile Bangladesh: Redefining smartphone experiences with cutting-edge innovation and style.",
  },
  {
    location: "Tangail, Bangladesh",
    memoryName: "OPPO",
    visitedDate: "August 30, 2022",
    imageURL: "https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/303009506_5481153131966592_224982046413007379_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeEheTmpLYNnTNkImYxpzM35ImpdgdPWuYwial2B09a5jDV_tuMtYAIsP7wJs8-YTWKB3aPjGFt7wciBDX3KvLf9&_nc_ohc=ub733P6ZqKAAX88DpgM&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AfADIw3bVrTe3Oi4j_2sUqVFx-zUroL7myLuoFrSoSNt0Q&oe=658C3F3E",
    hashtags: ["#OPPO", "#OPPO", "#OPPO"],
    description:
      "Oppo Mobile Bangladesh: Redefining smartphone experiences with cutting-edge innovation and style.",
  },
  {
    location: "Tangail, Bangladesh",
    memoryName: "মহেড়া জমিদার বাড়ি - টাঙ্গাইল",
    visitedDate: "November 19, 2019",
    imageURL: "https://scontent.fdac34-1.fna.fbcdn.net/v/t1.6435-9/74324502_2591249680956966_4578533749985116160_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeE0rrgsNWqjY7_mQLY_DDDWYoGba4zRczNigZtrjNFzM-1_m7IEjqbKa_SSdS18sVK1giQWClLQuUl9eJFsBHD6&_nc_ohc=UWTesk1iLkEAX_Xqmly&_nc_ht=scontent.fdac34-1.fna&oh=00_AfD0rukzIgGsMtZ69XAsiL5OiU5OOcC52owDx6-D0DDvMQ&oe=65AE5DB8",
    hashtags: ["#মহেড়া", "#মহেড়া", "#মহেড়া"],
    description:
      "মহেড়া জমিদার বাড়ি, টাঙ্গাইল: একটি ঐতিহাসিক এবং সৌন্দর্যময় স্থান, যেখানে প্রাকৃতিক সৌন্দর্য এবং স্থানীয় সংস্কৃতি মিলে আছে।",
  },
  {
    location: "Bandarban, BD",
    memoryName: "Bandarban Tour",
    visitedDate: "September 26, 2018",
    imageURL: "https://scontent.fdac34-1.fna.fbcdn.net/v/t1.6435-9/42604110_1893277134087561_7896976863292030976_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0bb214&_nc_eui2=AeG1uQRy50FNT5THg6QT7r2zgngDBVp4_naCeAMFWnj-dk0Uu1mnMmeEKgbbb-dmfR85K-v1LZzZw4pNZ9q1JZ0J&_nc_ohc=zhl0Ay9oXKwAX8WZsX5&_nc_ht=scontent.fdac34-1.fna&oh=00_AfBpS9ej3EvdZZZo3BxaffH7EvtoeX2PPw-nbRLyRnNCFA&oe=65AE365E",
    hashtags: ["#Bandarban", "#Bandarban", "#Bandarban"],
    description:
      "Bandarban, Bangladesh: প্রাকৃতিক সৌন্দর্যে অমূল্য একটি জায়গা।",
  },
];

const Memories = () => {
  return (
    <div>
      <h2 className="text-2xl my-5 font-teko font-300">Memories</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {memoriesArray.map((dt, index) => {
          return (
            <div key={index} className="relative group">
              <div className="col-span-1 relative h-[200px] overflow-hidden group">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={dt.imageURL}
                    alt=""
                    className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 transition-opacity opacity-0 group-hover:opacity-0"></div>
                <div className="absolute top-5 left-5 transform text-white text-center transition-opacity opacity-100 group-hover:opacity-0">
                  <p className="text-lg font-bold">{dt.memoryName}</p>
                  <p className="text-sm">{dt.visitedDate}</p>
                </div>
              </div>
              <div className="col-span-3 p-4 bg-white bg-opacity-30 h-[200px] overflow-hidden">
                <div className="flex flex-wrap">
                  {dt?.hashtags?.map((hs, index) => (
                    <span
                      key={index}
                      className="mr-2 mb-2 whitespace-nowrap text-xs bg-gray-300 rounded-md p-[2px] overflow-hidden overflow-ellipsis"
                    >
                      {hs}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{dt.location}</h3>
                <p className="text-gray-600 text-sm overflow-hidden overflow-ellipsis">{dt.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memories;

