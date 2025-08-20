import Image from "next/image";
import { Button } from "../ui/button";
import PreviewTest from "@/images/preview-test.jpg";
import { HeartIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";

export const Preview = () => {
  return (
    <section className="mb-10 grid grid-cols-2 justify-between gap-x-8">
      <PreviewContent />
      <PreviewImage />
    </section>
  );
};

const PreviewContent = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-16">
        <div className="mb-4 flex w-[48%] items-center justify-between text-base opacity-70">
          <span className="flex justify-between rounded-2xl bg-green-500 px-3 py-1">
            <StarIcon className="mr-2 h-5 w-5 text-white" />
            <span className="text-md font-extrabold">7.5</span>
          </span>
          <span>Детектив</span>
          <span>1979</span>
          <span>1ч 7мин</span>
        </div>
        <h1 className="mb-4 text-5xl font-bold">
          Шерлок Холмс и доктор Ватсон: Знакомство
        </h1>
        <p className="text-2xl font-light opacity-70">
          Увлекательные приключения самого известного сыщика всех времен
        </p>
      </div>
      <div className="flex w-[85%] justify-between">
        <Button variant="primary">Трейлер</Button>
        <Button variant="default">О фильме</Button>
        <Button variant="default">
          {<HeartIcon className="h-5 w-4.5 text-white" />}
        </Button>
        <Button variant="default">
          {<ArrowPathIcon className="h-5 w-4.5 text-white" />}
        </Button>
      </div>
    </div>
  );
};

const PreviewImage = () => {
  return (
    <div>
      <Image
        src={PreviewTest}
        alt="Preview image"
        className="rounded-3xl shadow-xl/50 shadow"
      />
    </div>
  );
};
