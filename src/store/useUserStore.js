import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware';

// const useUserStore = create((set) => ({
//   user: null,
//   setUser: (newUserInfo) => set({user: newUserInfo}),
// }))

const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (newUserInfo) => set({ user: newUserInfo }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

export default useUserStore;