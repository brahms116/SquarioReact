import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import useRouteGuard from "../hooks/useRouteGuard";
import useSignalRGlobalEvents from "../hooks/useSignalRGlobalEvents";

const Page = (props: { children: React.ReactNode }) => {
  const routeGuard = useRouteGuard();

  useEffect(() => {
    routeGuard();
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {props.children}
    </motion.div>
  );
};

export default Page;
