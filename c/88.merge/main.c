#include <stdio.h>

/**
 * leetcode url:
 * https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * level: simple
 **/

void merge(int *nums1, int size1, int m, int *nums2, int size2, int n)
{
  if (n == 0) return;
  else if (m == 0) {
    for(int i = 0; i < size2; i++) {
      nums1[i] = nums2[i];
    }
  }
}

int main(int argc, char** argv) {
	printf("===== start =====\n");
	// 2. int nums1[] = {0}, nums2[] = {1}, m = 0, n = 1;
	// 2. merge(nums1, 1, 0, nums2, 1, 1);
	int nums1[] = {1}, nums2[] = {}, m = 1, n = 0;
	merge(nums1, 1, 1, nums2, 0, 0);
	for(int i = 0; i < m+n; i++) {
		if (i != 0) printf(" ");
		printf("%d", nums1[i]);
	}
	printf("\n===== end =====\n");
	return 0;
}
