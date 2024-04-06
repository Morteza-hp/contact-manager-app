import { useMutation, useQuery } from "@tanstack/react-query";
import { Contact } from "../models/contacts";
import Service from "./service";
import { queryClient } from "./QueryProvider";

const QUERY_KEY = "contacts";

export function useGetContacts() {
  let totalRecords = 0;
  const { isPending, isFetching, isError, data } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => Service.contact.get(),
    select: (result) => {
      totalRecords = result.length;
      return result;
    },
  });

  return {
    isPending,
    isFetching,
    isError,
    data,
    totalRecords,
  };
}

export const useAddContacts = () => {
  const { mutateAsync, data, error, isPending } = useMutation({
    mutationFn: (contact: Contact) => Service.contact.add(contact),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] });
    },
  });
  return { mutateAsync, data, error, isPending };
};

export const useDetailContacts = (id: number) => {
  const { data, isPending, error } = useQuery({
    queryKey: [QUERY_KEY, id],
    queryFn: (options) => Service.contact.detail(options.queryKey[1] as number),
  });
  return { data, isPending, error };
};