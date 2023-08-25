import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface MobileMenu {
  isActive: boolean;
  changeIsActive: () => void;
}

const useMobileMenu = create<MobileMenu>()(
  devtools((set) => ({
    isActive: false,
    changeIsActive: () => {
      set((s) => ({ isActive: !s.isActive }));
    },
  }))
);

export default useMobileMenu;
