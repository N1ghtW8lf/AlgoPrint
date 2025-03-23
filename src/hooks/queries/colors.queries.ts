import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { colorService } from "@/services/color.service";

import { IColor,
    type TypeColorRequest,
 } from "@/types/color.types";

 import { toastShow } from '@/utils/toast/toast';


 const BASE_KEY = 'color';

 function useGetColors() {
     return useQuery({
        queryKey: [BASE_KEY, "list"], 
        queryFn: () => colorService.list(),
    });
 }

 function useGetColor(id: string) {
    return useQuery({
        queryKey: [BASE_KEY, id],
        queryFn: () => colorService.retrieve(id),
    });
 }

function useCreateColor() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: [BASE_KEY],
        mutationFn: (data: TypeColorRequest) => colorService.create(data),
        onSuccess: response => {
            queryClient.setQueryData([BASE_KEY], response.colors)
            toastShow('Color created successfully', 'success');
        },
        onError: () => {
            toastShow('Error creating color', 'error');
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({
                queryKey: [BASE_KEY]
            });
        }
    });
}

function useUpdateColor(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: [BASE_KEY, id],
        mutationFn: (data: Partial<TypeColorRequest>) => colorService.update(id, data),
        onMutate: async variables => {
            await queryClient.cancelQueries({
                queryKey: [BASE_KEY]
            })
            const previous = queryClient.getQueryData([BASE_KEY]) as 
             | IColor[]
             | undefined
            
            queryClient.setQueryData(
                [BASE_KEY], 
                (old: IColor[] | undefined) => 
                old?.map(item => 
                    item.id === id ? {...item, ...variables} : item
                )
            )

            return { previous }
        },
        onError(_, __, context)  {
            if (context) {
                queryClient.setQueryData([BASE_KEY], context.previous)
            }
            toastShow('Error updating color', 'error');
        },
        onSuccess: () => {
            toastShow('Color updated successfully', 'success');
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [BASE_KEY]
            });
        }
    });
}

function useDeleteColor(id: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: [BASE_KEY, id],
        mutationFn: () => colorService.delete(id),
        onSuccess: () => {
            queryClient.setQueryData([BASE_KEY], (old: IColor[] | undefined) => 
                old && {
                    ...old,
                    colors: old?.filter(item => item.id !== id)
                }
            )
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: [BASE_KEY]
            })
        }
    })
}

export {
    useGetColors,
    useGetColor,
    useCreateColor,
    useUpdateColor,
    useDeleteColor,
};