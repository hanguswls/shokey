import { useState, useEffect } from "react";
import { getAccounts, postAccounts, putAccounts, getBalance, postDeposit, postWithdraw } from "../apis/accountApi";
import { useCookies } from "react-cookie";
import useMyUser from "./useMyUser";
import useModal from "./useModal";

const useAccounts = () => {
  const [cookies] = useCookies(["accessToken"]);
  const { user } = useMyUser();
  const { closeModal } = useModal();
  const [balance, setBalance] = useState(null);
  const [amount, setAmount] = useState(null);
  const [accounts, setAccounts] = useState(null);

  const fetchAccounts = async () => {
    try {
      const res = await getAccounts(cookies.accessToken);
      setAccounts(res.data);
    }
    catch (error) { alert(error.message); }
  };

  const fetchBalance = async() => {
    try {
      const res = await getBalance(cookies.accessToken);
      setBalance(res.data.balance);
    }
    catch (error) { alert(error.message); }
  }

  const fetchData = async() => {
    Promise.all([
      fetchAccounts(),
      fetchBalance()
    ])
  }

  useEffect(() => {
    if (user?.bankAccount) {
      fetchData();
    }
  }, [user]);

  const handleBankChange = (e) => {
    setAccounts(prev => ({...prev, bank: e.target.value}));
  }

  const handleAcccountChange = (e) => {
    setAccounts(prev => ({...prev, account: e.target.value}));
  }

  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleRegisterAccounts = async (e) => {
    e.preventDefault();

    try {
      await postAccounts(accounts, cookies.accessToken);
      await fetchData();
      alert('계좌 정보가 수정되었습니다.');
      closeModal();
    }
    catch (error) { alert(error.message); }
  };

  const handleUpdateAccounts = async (e) => {
    e.preventDefault();

    try {
      await putAccounts(accounts, cookies.accessToken);
      await fetchData();
      closeModal();
    }
    catch (error) { alert(error.message); }
  };

  const handleDeposit = async(e) => {
    e.preventDefault();

    try {
      await postDeposit(amount, cookies.accessToken);
      await fetchData();
      closeModal();
    }
    catch (error) { alert(error.message); }
  }

  const handleWithdraw = async(e) => {
    e.preventDefault();

    try {
      await postWithdraw(amount, cookies.accessToken);
      await fetchData();
      closeModal();
    }
    catch (error) { alert(error.message); }
  }

  return {
    accounts,
    balance,
    amount,
    handleBankChange,
    handleAcccountChange,
    handleAmountChange,
    handleRegisterAccounts,
    handleUpdateAccounts,
    handleDeposit,
    handleWithdraw
  };
};

export default useAccounts;