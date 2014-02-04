#include<stdint.h>

int addArray(uint8_t numbers[], int count) {
  int total = 0;
  for (int i=0; i < count; i++) {
    total += numbers[i];
  }
  return total;
}
