#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int N, M, L;
vector<int> hugeso;

int main() {
    cin >> N >> M >> L;
    hugeso.push_back(0);
    hugeso.push_back(L);
    for (int i = 0; i < N; i++) {
      int temp;
      cin >> temp;
      hugeso.push_back(temp);
    }
    
    sort(hugeso.begin(), hugeso.end());
    
    int start = 1, end = L - 1, answer = 0;
    while (start <= end) {
      int mid = (start + end) / 2;
      int count = 0;
      for(int i = 1; i < hugeso.size(); ++i) {
        int distance = hugeso[i] - hugeso[i - 1];
        if(distance > mid) count += (distance - 1) / mid;
      }
      if (count > M) start = mid + 1;
      else {
        end = mid - 1;
        answer = mid;
      }
    }
    cout << answer << endl;
    return 0;
}