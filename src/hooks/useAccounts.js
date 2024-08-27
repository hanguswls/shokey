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

  const loadAccounts = async () => {
    try {
      const res = await getAccounts(cookies.accessToken);
      setAccounts(res.data);
    }
    catch (error) { alert(error.message); }
  };

  const loadBalance = async() => {
    try {
      const res = await getBalance(cookies.accessToken);
      setBalance(res.data.balance);
    }
    catch (error) { alert(error.message); }
  }

  const loadData = async() => {
    Promise.all([
      loadAccounts(),
      loadBalance()
    ])
  }

  useEffect(() => {
    if (user?.bankAccount) {
      loadData();
    }
  }, [user]);

  const handleBankChange = (e) => setAccounts(prev => ({...prev, bank: e.target.value}));

  const handleAcccountChange = (e) => setAccounts(prev => ({...prev, account: e.target.value}));

  const handleAmountChange = (e) => setAmount(e.target.value);

  const handleRegisterBtnClick = async (e) => {
    e.preventDefault();

    try {
      await postAccounts(accounts, cookies.accessToken);
      await loadData();
      closeModal();
    }
    catch (error) { alert(error.message); }
  };

  const handleUpdateAccounts = async (e) => {
    e.preventDefault();

    try {
      await putAccounts(accounts, cookies.accessToken);
      await loadData();
      closeModal();
    }
    catch (error) { alert(error.message); }
  };

  const handleDeposit = async(e) => {
    e.preventDefault();

    try {
      await postDeposit(amount, cookies.accessToken);
      await loadData();
      closeModal();
    }
    catch (error) { alert(error.message); }
  }

  const handleWithdraw = async(e) => {
    e.preventDefault();

    try {
      await postWithdraw(amount, cookies.accessToken);
      await loadData();
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
    handleRegisterBtnClick,
    handleUpdateAccounts,
    handleDeposit,
    handleWithdraw
  };
};

export default useAccounts;