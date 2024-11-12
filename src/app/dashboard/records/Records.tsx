"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "mantine-datatable";
import { Button, LoadingOverlay, Modal, Pagination } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useDisclosure, useDebouncedValue } from "@mantine/hooks";
import classes from "./Records.module.css";

function Records() {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebouncedValue(searchQuery, 800);
  const [visible, setVisible] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [recordToDelete, setRecordToDelete] = useState(null);

  const recordsPerPage = 5;

  const fetchUsers = (query = "") => {
    setVisible(true);
    axios
      .get(`/api/users`, {
        params: {
          username: query,
          phone: query,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const filteredRecords = res.data.filter(
            (record) =>
              record.username.toLowerCase().includes(query.toLowerCase()) ||
              record.phone.includes(query)
          );

          setRecords(filteredRecords);
          setTotalPages(Math.ceil(filteredRecords.length / recordsPerPage));
        }
      })
      .finally(() => {
        setVisible(false);
      });
  };

  useEffect(() => {
    fetchUsers(debouncedSearchQuery);
  }, [debouncedSearchQuery]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);

  const handlePageChange = async (page) => {
    setVisible(true);
    try {
      setCurrentPage(page);
      const res = await axios.get(`/api/users`, {
        params: {
          username: debouncedSearchQuery,
          phone: debouncedSearchQuery,
          page: page,
        },
      });
      if (res.status === 200) {
        const filteredRecords = res.data.filter(
          (record) =>
            record.username
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase()) ||
            record.phone.includes(debouncedSearchQuery)
        );

        setRecords(filteredRecords);
        setTotalPages(Math.ceil(filteredRecords.length / recordsPerPage));
      }
    } finally {
      setVisible(false);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/users/${recordToDelete}`);

      if (res.status === 200) {
        fetchUsers(debouncedSearchQuery);
      }
    } finally {
      close();
      setRecordToDelete(null);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleOpenDeleteModal = (id) => {
    setRecordToDelete(id);
    open();
  };

  const ModalContent = () => (
    <div className={classes.modelContentContainer}>
      <h1 className={classes.modelText}>
        Are You Sure you want to Delete this Record?
      </h1>
      <div className={classes.modelButtonContainer}>
        <div style={{ marginRight: "20px" }}>
          {/* <Button variant="primary" onClick={close}>
            CANCEL
          </Button> */}
          <button
            className="px-4 py-2 bg-[#228be6] text-white rounded-md hover:bg-[#1c7ed6] focus:outline-none focus:ring-2 focus:ring-[#228be6] focus:ring-offset-2"
            onClick={close}
          >
            CANCEL
          </button>
        </div>
        <div>
          {/* <Button color="#c8102e" onClick={handleDelete}>
            DELETE
          </Button> */}
          <button
            className="px-4 py-2 bg-[#c92a2a] text-white rounded-md hover:bg-[#b02525] focus:outline-none focus:ring-2 focus:ring-[#c92a2a] focus:ring-offset-2"
            // onClick={() => handleOpenDeleteModal(rowData.id)}
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "blue", type: "bars" }}
      />
      <div className="bg-gray-200 h-screen">
        <div className="max-w-screen-l mx-auto px-4 lg:px-8 py-8 text-black">
          <div className="bg-white shadow-md rounded-lg">
            <div className="p-4">
              <div className="text-center mb-6">
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{ fontSize: "2rem", marginTop: "20px" }}
                >
                  Mehdi Hasan
                </h2>
                <p
                  className="text-gray-600 mb-4"
                  style={{
                    fontSize: "25px",
                    fontFamily: "serif",
                    marginTop: "25px",
                  }}
                >
                  Client Measurement Details
                </p>
              </div>

              <div className={classes.searchContainer}>
                <input
                  type="text"
                  placeholder="Search by Name / Phone No"
                  className={classes.searchInput}
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>

              <Modal
                opened={opened}
                onClose={close}
                centered
                styles={{
                  header: {
                    backgroundColor: "#3aafa9",
                    textAlign: "center",
                  },
                  title: {
                    color: "white",
                    marginLeft: "100px !important",
                    padding: "0px",
                  },
                }}
              >
                <div className="modal_content">
                  <ModalContent />
                </div>
              </Modal>

              <div className="table-responsive">
                {currentRecords.length > 0 ? (
                  <DataTable
                    className={classes.dataTable}
                    columns={[
                      {
                        accessor: "username",
                        width: "20%",
                        resizable: true,
                        render: (rowData) => (
                          <div className={classes.tableCell}>
                            {rowData.username}{" "}
                          </div>
                        ),
                      },
                      {
                        accessor: "email",
                        width: "20%",
                        resizable: true,
                        render: (rowData) => (
                          <div className={classes.tableCell}>
                            {rowData.email}
                          </div>
                        ),
                      },

                      {
                        accessor: "phone",
                        width: "15%",
                        resizable: true,
                        render: (rowData) => (
                          <div className={classes.tableCell}>
                            {rowData.phone}
                          </div>
                        ),
                      },
                      {
                        accessor: "date",
                        width: "15%",
                        resizable: true,
                        render: (rowData) => (
                          <div className={classes.tableCell}>
                            {rowData.date
                              ? new Date(rowData.date).toLocaleDateString()
                              : "N/A"}
                          </div>
                        ),
                      },
                      {
                        accessor: "actions",
                        title: "Actions",
                        render: (rowData) => (
                          <div className={classes.tableActions}>
                            <Link
                              href={`/dashboard/records/view/${rowData.id}`}
                            >
                              {/* <Button variant="filled">View</Button> */}
                              <button className="px-4 py-2 bg-[#228be6] text-white rounded-md hover:bg-[#1c7ed6] focus:outline-none focus:ring-2 focus:ring-[#228be6] focus:ring-offset-2">
                                View
                              </button>
                            </Link>
                            <Link
                              href={`/dashboard/records/edit/${rowData.id}`}
                            >
                              {/* <Button color="cyan">Edit</Button> */}
                              <button className="px-6 py-2 bg-[#1098ad] text-white rounded-md hover:bg-[#0c8599] focus:outline-none focus:ring-2 focus:ring-[#1098ad] focus:ring-offset-2">
                                Edit
                              </button>
                            </Link>

                            <button
                              className="px-4 py-2 bg-[#c92a2a] text-white rounded-md hover:bg-[#b02525] focus:outline-none focus:ring-2 focus:ring-[#c92a2a] focus:ring-offset-2"
                              onClick={() => handleOpenDeleteModal(rowData.id)}
                            >
                              Delete
                            </button>
                          </div>
                        ),
                        width: "20%",
                        resizable: true,
                      },
                    ]}
                    records={currentRecords}
                    minHeight={500}
                    height={500}
                    withRowBorders
                    withTableBorder
                    striped
                    fz="md"
                    verticalSpacing="md"
                    highlightOnHover
                  />
                ) : (
                  <div className={classes.noRecords}>No Records Found</div>
                )}
              </div>
              <div className="mt-4 flex justify-center">
                <Pagination
                  total={totalPages}
                  value={currentPage}
                  onChange={handlePageChange}
                  color="teal"
                  radius="xl"
                />
              </div>

              <div className="mt-4 text-center" style={{ color: "darkblue" }}>
                Showing {indexOfFirstRecord + 1} to{" "}
                {indexOfLastRecord > records.length
                  ? records.length
                  : indexOfLastRecord}{" "}
                of {records.length} records
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Records;
