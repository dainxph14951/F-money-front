import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import ModalInstallmentAdd from "./modal";
import { useAppSelector } from "../../../app/hooks";
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import hopDong from "../../../../src/assets/hopDong.pdf";
import { isAuthenticate } from "../../../ultils/localStorage";
function DddExportList() {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contracts = useAppSelector((state) => state.contract.value);
  const inforUser = useAppSelector(state => state.auth.inforUser)
  const linkExcel = `http://http://localhost:9000/api/contractMortgageExcel?id=${inforUser.id}`
  const userRole = isAuthenticate()
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex px-5 pt-5">
        <div className=""></div>
        {inforUser.role != 2 ? <div className="pr-2">
          <Button type="primary" onClick={showModal}>
            Thêm mới
          </Button>
          <ModalInstallmentAdd
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            setIsModalOpen={setIsModalOpen}
          />
        </div> : ""}

        <div className="mb-3 xl:w-96 text-left">
          <a
            href={`http://localhost:9000/api/contractExcel?id=${inforUser.id}`}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-[5px] px-4 rounded inline-flex items-center"
          >
            <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Xuất Excel</span>
          </a>
          <a
            href={hopDong}
            download="Hơp Đồng Vay Trả Góp"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-[5px] px-4 rounded inline-flex items-center ml-2"
          >
            <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Hợp đồng PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default DddExportList;
