import { FC, useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import cn from 'classnames';

interface Props {
  children: any;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<Props> = ({ children, isOpen, onClose }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <>
      <section className={cn('transition ease-out duration-100 transform absolute inset-y-0 right-0 z-50 pl-10 max-w-full flex sm:pl-16 outline-none', !isOpen && 'translate-x-full')}>
        <div className="h-full md:w-screen md:max-w-md">
          <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">{children}</div>
        </div>
      </section>
      {isOpen && (
        <div ref={ref} className="fixed inset-0 overflow-hidden h-full z-40">
          <div className="absolute inset-0 overflow-hidden">
            <div onClick={onClose} className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
