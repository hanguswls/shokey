import {create} from 'zustand'

const useUserStore = create((set) => ({
  userName: '',
  id: '',
  influencerId: '',
  setUserName: (userName) => set({userName}),
  setId: (id) => set({id}),
  setInfluencerId: (influencerId) => set({influencerId}),
  clearUser: () => set({userName: '', id: '', influencerId: ''})
}))

export default useUserStore;