import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 사용자 목록 패치 함수
const fetchUsers = async () => {
  const response = await axios.get("http://localhost:8080/ch09/user2");
  return response.data;
};

// 사용자 삭제 함수
const deleteUser = async (user) => {
  const response = await axios.delete(
    `http://localhost:8080/ch09/user2/${user.uid}`
  );
  return response.data;
};

export default function User2List() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // React Query 조회 함수
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // React Query 삭제 Mutation 함수
  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // 삭제 후 목록 새로고침
    },
  });

  const modifyMove = (user) => {
    navigate(`/user2/modify?uid=${user.uid}`);
  };

  const deleteProc = (user) => {
    if (deleteMutation.isLoading) {
      console.log("삭제 진행 중...");
      return;
    }
    deleteMutation.mutate(user);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  return (
    <div className="User2List">
      <span>User2 목록</span>
      <table border={1}>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>주소</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.birth}</td>
              <td>{user.addr}</td>
              <td>
                <button onClick={() => modifyMove(user)}>수정</button>
                <button onClick={() => deleteProc(user)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
