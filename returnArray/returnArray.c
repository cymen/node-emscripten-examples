#include<stdint.h>

void returnArray(uint8_t numbers[], int count) {
  for (int i=0; i < count; i++) {
    numbers[i] = numbers[i] * 2;
  }
}
