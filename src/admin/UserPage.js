import {Button, Popconfirm, Table, message} from "antd";
import {useCallback, useEffect, useState} from "react";
import {format} from "date-fns";

const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    const columns = [
        {
            title: "Ad",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Soyad",
            dataIndex: "lastName",
            key: "lastName",
        },
        {
            title: "Mail",
            dataIndex: "mail",
            key: "mail",
        },
        {
            title: "Telefon Numarası",
            dataIndex: "telephoneNumber",
            key: "telephoneNumber",
        },
        {
            title: "Adres",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Doğum Günü",
            dataIndex: "dateBirth",
            key: "dateBirth",
            render: (date) => format(new Date(date), "dd-MM-yyyy"),
        },
        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            render: (_, record) => (
                <Popconfirm
                    title="Kullanıcıyı Sil"
                    description="Kullanıcıyı silmek istediğinizden emin misiniz?"
                    okText="Evet"
                    cancelText="Hayır"
                    onConfirm={() => deleteUser(record.mail)}
                >
                    <Button type="primary" danger>
                        Sil
                    </Button>
                </Popconfirm>
            ),
        },

    ];

    const fetchUsers = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`http://localhost:8080/api/user/users`);

            if (response.ok) {
                const data = await response.json();
                setDataSource(data);
            } else {
                message.error("Veriler başarıyla getirildi.");
            }
        } catch (error) {
            console.log("Veri getirme işlemi başarısız:", error);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, ['http://localhost:8080']);

    const deleteUser = async (mail) => {
        try {
            const response = await fetch(`http://localhost:8080/api/user/deleteUser/${mail}`, {
                method: "DELETE",
            });

            if (response.ok) {
                message.success("Kullanıcı başarıyla silindi.");
                fetchUsers();
            } else {
                message.error("Silme işlemi başarısız.");
            }
        } catch (error) {
            console.log("Silme hatası:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <Table
            dataSource={dataSource}
            columns={columns}
            rowKey={(record) => record.id}
            loading={loading}
        />
    );
};

export default UserPage